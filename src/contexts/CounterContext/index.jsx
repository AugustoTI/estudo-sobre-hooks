import { createContext, useContext, useReducer, useRef } from 'react';
import { reducer } from './reducer';
import { buildActions } from './build-actions';

const Context = createContext();

export const initialState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispath));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};

export const useCounterContent = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('You have to use useCounterContent inside <CounterContextProvider>');
  }

  return [...context];
};
