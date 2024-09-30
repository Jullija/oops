import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, UserContext } from "../../contexts/userContext";
import { useCurrentUserLazyQuery } from "../../graphql/currentUser.graphql.types";
import { pathsGenerator } from "../../router/paths";
import { Roles, defaultUnauthenticatedUser } from "../../utils/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import Cookies from "js-cookie";
import { useUser } from "../common/useUser";
import { UsersRolesType } from "../../__generated__/schema.graphql.types";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [fetchCurrentUser, { data: currentUserData }] =
    useCurrentUserLazyQuery();
  const context = useContext(UserContext);

  const handleUserSelect = (user: User) => {
    if (!context) {
      throw new Error("useContext must be used within a UserProvider");
    }
    const userData = {
      userId: user?.userId || defaultUnauthenticatedUser.userId,
      role: user?.role || defaultUnauthenticatedUser.role,
      nick: user?.nick || defaultUnauthenticatedUser.nick,
    };
    setUser(user);
    const token = "Bypass" + user.userId;
    Cookies.set("token", token || "");
    Cookies.set("user", JSON.stringify(userData));
    navigate(
      user.role === Roles.STUDENT
        ? pathsGenerator.student.StudentProfile
        : pathsGenerator.teacher.Groups,
    );
  };

  const handleLogin = async (email: string, password: string) => {
    if (!context) {
      throw new Error("useContext must be used within a UserProvider");
    }

    try {
      let token: string | undefined;
      if (password.length < 4) {
        token = "Bypass" + password;
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        token = await auth.currentUser?.getIdToken();
      }
      Cookies.set("token", token || "");
      fetchCurrentUser();
    } catch (error) {
      throw new Error("Invalid email or password.");
    }
  };

  useEffect(() => {
    if (currentUserData) {
      let role = Roles.UNAUTHENTICATED_USER;
      switch (currentUserData.getCurrentUser?.role) {
        case UsersRolesType.Student:
          role = Roles.STUDENT;
          break;
        case UsersRolesType.Teacher:
          role = Roles.TEACHER;
          break;
        case UsersRolesType.Coordinator:
          role = Roles.COORDINATOR;
          break;
      }
      const userData = {
        userId:
          currentUserData.getCurrentUser?.userId ||
          defaultUnauthenticatedUser.userId,
        role: role || defaultUnauthenticatedUser.role,
        nick:
          currentUserData.getCurrentUser?.nick ||
          defaultUnauthenticatedUser.nick,
      };
      setUser(userData);
      // Store user data in cookies
      Cookies.set("user", JSON.stringify(userData));
      navigate(
        role === Roles.STUDENT
          ? pathsGenerator.student.StudentProfile
          : pathsGenerator.teacher.Groups,
      );
    }
  }, [currentUserData, setUser, navigate]);

  return { handleUserSelect, handleLogin };
};
