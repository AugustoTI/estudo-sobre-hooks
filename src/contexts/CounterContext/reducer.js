import * as actionTypes from './types';
import { initialState } from './';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREASE: {
      return { ...state, counter: state.counter + 1 };
    }
    case actionTypes.DECREASE: {
      return { ...state, counter: state.counter - 1 };
    }
    case actionTypes.RESET: {
      return { ...initialState };
    }
    case actionTypes.SET_COUNTER: {
      return { ...state, ...action.payload };
    }
    case actionTypes.ASYNC_INCREASE_START: {
      return { ...state, loading: true };
    }
    case actionTypes.ASYNC_INCREASE_END: {
      return { ...state, loading: false, counter: state.counter + 1 };
    }
    case actionTypes.ASYNC_DECREASE_START: {
      return { ...state, loading: true };
    }
    case actionTypes.ASYNC_DECREASE_END: {
      return { ...state, loading: false, counter: state.counter - 1 };
    }
  }

  return { ...state };
};
