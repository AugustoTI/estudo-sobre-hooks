import './App.css';
import { useReducer } from 'react';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O corpo do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  if (action.type === 'muda') {
    console.log('Chamou teste1');
    return { ...state, title: 'Outro titulo ai' };
  }

  if (action.type === 'inverter') {
    console.log('Chamou teste2');
    const { title } = state;
    return { ...state, title: title.split('').reverse().join('') };
  }

  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);

  const { title, body, counter } = state;

  return (
    <div className="App">
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda' })}>Mudar titulo</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverter texto</button>
    </div>
  );
}

export default App;
