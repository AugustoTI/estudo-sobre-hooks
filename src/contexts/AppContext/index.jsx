import { createContext, useState } from 'react';
import { globalState } from './data';

export const GloblalContext = createContext();

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setContextState] = useState(globalState);

  return <GloblalContext.Provider value={{ contextState, setContextState }}>{children}</GloblalContext.Provider>;
};
