import { useNavigate } from "react-router-dom";
import { User } from "../../contexts/userContext";
import { useCurrentUserLazyQuery } from "../../graphql/currentUser.graphql.types";
import { pathsGenerator } from "../../router/paths";
import { defaultUnauthenticatedUser } from "../../utils/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import Cookies from "js-cookie";
import { useUser } from "../common/useUser";
import { useApolloClient } from "@apollo/client";
import { UserFromList } from "../../components/Welcome/UsersListWithFilter/UsersListWithFilter";
import { UsersRolesType } from "../../__generated__/schema.graphql.types";

export const cookiesStrings = {
  token: "token",
  user: "user",
};

type LoginCredentials = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const apolloClient = useApolloClient();

  const [fetchCurrentUser] = useCurrentUserLazyQuery();

  const loginWithUserSelect = async (userFromList: UserFromList) => {
    const token = getBypassToken(userFromList.userId);
    Cookies.set(cookiesStrings.token, token);

    const { data, error } = await fetchCurrentUser();
    const user: User | undefined = data?.getCurrentUser
      ? {
          nick: data?.getCurrentUser.nick,
          role: data?.getCurrentUser.role.toUpperCase() as UsersRolesType,
          userId: data?.getCurrentUser.userId,
          editions:
            data?.getCurrentUser.userGroups.map((group) => {
              return {
                name: group?.group.edition.editionName as string,
                editionId: group?.group.edition.editionId as string,
                editionYear: group?.group.edition.editionYear as number,
                endDate: group?.group.edition.endDate as string,
                label: group?.group.edition.label as string,
                startDate: group?.group.edition.startDate as string,
              };
            }) ?? [],
        }
      : undefined;

    if (error || !user) {
      await logout();
      throw new Error(error?.message ?? "Fetched current user is undefined");
    }

    Cookies.set(cookiesStrings.user, JSON.stringify(user));

    setUser(user);
    navigateToStartScreen(user);
  };

  const getBypassToken = (userId: string) => {
    return `Bypass${userId}`;
  };

  const loginWithCredentials = async (credentials: LoginCredentials) => {
    const loginWithBypass = credentials.password.length < 4;

    // set cookie token
    // login with bypass - assumption that password is correct userId
    const token = loginWithBypass
      ? getBypassToken(credentials.password)
      : await getFirebaseToken(credentials);

    Cookies.set(cookiesStrings.token, token);

    // fetch currently logged in user data
    const { data, error } = await fetchCurrentUser();
    const user: User | undefined = data?.getCurrentUser
      ? {
          nick: data?.getCurrentUser.nick,
          role: data?.getCurrentUser.role.toUpperCase() as UsersRolesType,
          userId: data?.getCurrentUser.userId,
          editions:
            data?.getCurrentUser.userGroups.map((group) => {
              return {
                name: group?.group.edition.editionName as string,
                editionId: group?.group.edition.editionId as string,
                editionYear: group?.group.edition.editionYear as number,
                endDate: group?.group.edition.endDate as string,
                label: group?.group.edition.label as string,
                startDate: group?.group.edition.startDate as string,
              };
            }) ?? [],
        }
      : undefined;

    if (error || !user) {
      await logout();
      throw new Error(error?.message ?? "Fetched current user is undefined");
    }

    // set cookie user
    Cookies.set(cookiesStrings.user, JSON.stringify(user));
    setUser(user);
    navigateToStartScreen(user);
  };

  const getFirebaseToken = async (credentials: LoginCredentials) => {
    await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password,
    );
    const token = await auth.currentUser?.getIdToken();
    if (!token) {
      throw new Error("Token is null - sign in failed.");
    }
    return token;
  };

  const navigateToStartScreen = (user: User) => {
    // TODO frontend and backend enums do not match
    switch (user.role) {
      case UsersRolesType.Coordinator:
      case UsersRolesType.Teacher:
        navigate(pathsGenerator.teacher.Groups);
        break;
      case UsersRolesType.Student:
        navigate(pathsGenerator.student.StudentProfile);
        break;
      default:
        throw new Error("should never happen.");
    }
  };

  const logout = async () => {
    Cookies.remove(cookiesStrings.token);
    Cookies.remove(cookiesStrings.user);

    await apolloClient.clearStore();

    setUser(defaultUnauthenticatedUser);
    navigate(pathsGenerator.common.Default);
  };

  return {
    loginWithUserSelect,
    loginWithCredentials,
    logout,
  };
};
