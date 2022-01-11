// import P from 'prop-types';
import { createContext, useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo do contexto',
  body: 'Um paragrafo qualquer',
  counter: 0,
};

const GloblalContext = createContext();

//eslint-disable-next-line
const Div = () => {
  return (
    <div className="App">
      <H1 />
      <P />
    </div>
  );
};

//eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GloblalContext);
  const {
    contextState: { title, counter },
  } = theContext;

  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

//eslint-disable-next-line
const P = () => {
  const theContext = useContext(GloblalContext);

  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;

  const handleAdd = () => {
    const newContext = { ...contextState };
    newContext.counter++;
    setContextState(newContext);
  };

  return <p onClick={handleAdd}>{body}</p>;
};

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GloblalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GloblalContext.Provider>
  );
}

export default App;
