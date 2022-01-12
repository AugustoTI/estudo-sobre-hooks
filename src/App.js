import './App.css';
import P from 'prop-types';
import { useReducer, createContext, useContext, useRef } from 'react';

// data.js
export const globalState = {
  title: 'O titulo do contexto',
  body: 'O corpo do contexto',
  counter: 0,
};

//reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE': {
      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

//AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: 'CHANGE_TITLE', payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

//Components/H1/index.jsx
const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input ref={inputRef} type="text" />
    </>
  );
};

// App.jsx
function App() {
  return (
    <AppContext>
      <div className="App">
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
