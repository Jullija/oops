import { ReactElement } from "react";
import { hasRole } from "../utils/utils";
import { Forbidden } from "../screens/forbidden";
import { useUser } from "../hooks/common/useUser";
import { Roles } from "../utils/types";

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
