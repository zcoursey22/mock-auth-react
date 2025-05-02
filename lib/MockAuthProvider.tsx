import { ReactNode } from "react";
import MockAuthContext from "./MockAuthContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  return (
    <MockAuthContext.Provider value={{ user: undefined }}>
      {children}
    </MockAuthContext.Provider>
  );
};

export default AuthProvider;
