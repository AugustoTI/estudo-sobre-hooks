import { Component, useEffect, useState } from 'react';

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter((prevC) => prevC + 1);

  useEffect(() => {
    if (counter > 3) throw new Error('Deu ruim mlk');
  }, [counter]);

  const fontSize = '40px';
  return (
    <>
      <button onClick={() => handleClick()} style={{ fontSize }}>
        Click em mim {counter}
      </button>
    </>
  );
};

function Home() {
  return (
    <>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
    </>
  );
}

export default Home;
