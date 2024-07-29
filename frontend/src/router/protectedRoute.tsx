import { ReactElement } from "react";
import { hasRole } from "../utils/utils";
import { Forbidden } from "../screens/Forbidden/Forbidden";
import { useUser } from "../hooks/common/useUser";
import { Roles } from "../utils/types";

type ProtectedRouteProps = {
  element: ReactElement;
  allowedRoles: Roles[];
};

export const ProtectedRoute = ({
  element,
  allowedRoles,
}: ProtectedRouteProps) => {
  const { user } = useUser();
  return hasRole(user, allowedRoles) ? element : <Forbidden />;
};
