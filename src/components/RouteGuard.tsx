import { ReactNode } from "react";
import { useAuth } from "../../lib/main";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  redirectTo: string;
  reversed?: boolean;
}

const RouteGuard = ({ children, redirectTo, reversed }: Props) => {
  const { user } = useAuth();

  if ((reversed && user) || (!reversed && !user)) {
    return <Navigate replace to={redirectTo} />;
  }
  return children;
};

export default RouteGuard;
