import { useNavigate } from "react-router-dom";
import { User } from "../../contexts/userContext";
import { useCurrentUserLazyQuery } from "../../graphql/currentUser.graphql.types";
import { pathsGenerator } from "../../router/paths";
import { defaultUnauthenticatedUser, Roles } from "../../utils/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import Cookies from "js-cookie";
import { useUser } from "../common/useUser";
import { useApolloClient } from "@apollo/client";

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

  const loginWithUserSelect = (user: User) => {
    const token = getBypassToken(user.userId);
    Cookies.set(cookiesStrings.token, token);
    Cookies.set(cookiesStrings.user, JSON.stringify(user));

    setUser(user);
    // TODO why tf user.role is not typed
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
          role: data?.getCurrentUser.role.toLocaleLowerCase(),
          userId: data?.getCurrentUser.userId,
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
    switch (user.role.toLocaleLowerCase()) {
      case Roles.COORDINATOR:
      case Roles.TEACHER:
        navigate(pathsGenerator.teacher.Groups);
        break;
      case Roles.STUDENT:
      case Roles.ADMIN:
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
