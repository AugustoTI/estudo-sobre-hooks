import { useEffect, useRef, useState } from 'react';
import './App.css';

const useMyHook = (callback, delay = 1000) => {
  const savedCB = useRef();

  useEffect(() => {
    savedCB.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCB.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);

  useMyHook(() => setCounter((c) => c + 1), delay);

  const handleClickInc = () => setDelay((d) => d + 1000);
  const handleClickDec = () => setDelay((d) => d - 1000);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={handleClickInc}>Diminuir velocidade</button>
      <button onClick={handleClickDec}>Aumentar velocidade</button>
    </div>
  );
}

export default App;
