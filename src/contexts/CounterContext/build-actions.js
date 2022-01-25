import * as actionTypes from './types';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: (payload) => dispatch({ type: actionTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncDecrease: () => asynceDecreaseFn(dispatch),
  };
};

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_END });
    }, 2000);
  });
};

const asynceDecreaseFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_DECREASE_START });

  return await new Promise((resolve) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_DECREASE_END });
    }, 2000);
  });
};
