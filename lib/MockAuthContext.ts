import { createContext } from "react";

interface IMockAuthContext {
  user?: string;
}

const MockAuthContext = createContext<IMockAuthContext | undefined>(undefined);

export default MockAuthContext;
