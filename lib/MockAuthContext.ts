import { createContext } from "react";

interface IMockAuthContext {
  user?: string;
}

const initialContext: IMockAuthContext = {
  user: undefined,
};

const MockAuthContext = createContext<IMockAuthContext>(initialContext);

export default MockAuthContext;
