import { ReactNode, useContext } from "react";
import MockAuthContext from "./MockAuthContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const context = useContext(MockAuthContext);

  return (
    <MockAuthContext.Provider value={context}>
      {children}
    </MockAuthContext.Provider>
  );
};

export default AuthProvider;
