import { ReactElement } from "react";
import { useUser } from "../hooks/useUser";
import { hasRole } from "../utils/utils";
import { Roles } from "../utils";
import { Forbidden } from "../screens/forbidden";

function ProtectedRoute({
  element,
  allowedRoles,
}: {
  element: ReactElement;
  allowedRoles: Roles[];
}) {
  const { user } = useUser();
  return hasRole(user, allowedRoles) ? element : <Forbidden />;
}

export { ProtectedRoute };
