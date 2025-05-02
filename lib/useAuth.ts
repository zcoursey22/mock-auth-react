import { useContext } from "react";
import MockAuthContext from "./MockAuthContext";

const useAuth = () => {
  const context = useContext(MockAuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be nested within MockAuthProvider");
  }
  return context;
};

export default useAuth;
