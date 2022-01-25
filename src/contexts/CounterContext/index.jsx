import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const initialState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispath] = useState(initialState);

  return <Context.Provider value={[state, dispath]}>{children}</Context.Provider>;
};

export const useCounterContent = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('You have to use useCounterContent inside <CounterContextProvider>');
  }

  return [...context];
};
