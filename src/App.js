// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //ComponentDidUpdate = Executado toda vez que meu componente é atualizado
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  //ComponentDidMount (Sem dependencias) = Executa apenas 1 vez quando o componente é montado
  useEffect(() => {
    console.log('ComponentDidMount');
    document.querySelector('h1').addEventListener('click', () => console.log('H1 foi clicado'));

    //ComponentWillUnmount = Quando o componente é desmontado
    return () => {
      document.querySelector('h1').removeEventListener('click', () => console.log('H1 foi clicado'));
    };
  }, []);

  //ComponentDidMount (Com Dependencias) = Executa cada vez que minha dependencia é a atualizada
  useEffect(() => {
    console.log('C:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  const handleClick = () => setCounter(counter + 1);
  const handleClick2 = () => setCounter2(counter2 + 1);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <h1>Contador 2: {counter2}</h1>
      <button onClick={handleClick}>1 Increment</button>
      <button onClick={handleClick2}>2 Increment</button>
    </div>
  );
}

export default App;
