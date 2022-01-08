import P from 'prop-types'; // Lib usada para validar props no React (Alternativa do TypeScript)
import './App.css';
import { memo, useState, useEffect, useCallback } from 'react';

// Componente que é salvo na "memoria" do React. É renderizado quando o React dececta alteração e depois é salvo novamente
const Button = memo(function button({ incrementBtn }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementBtn(100)}>Increment</button>;
});

Button.propTypes = {
  incrementBtn: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  console.log('Pai, renderizou');

  //Função que é salva na "memoria" do componente, fazendo que não precise reescrever a função toda vez que é redenrizada novamente
  const handleClick = useCallback((num) => {
    setCounter((counter) => counter + num);
  }, []);

  return (
    <div className="App">
      <h1>C1: {counter}</h1>
      <Button incrementBtn={handleClick} />
    </div>
  );
}

export default App;
