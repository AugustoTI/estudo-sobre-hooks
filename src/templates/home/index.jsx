import { useCounterContent } from '../../contexts/CounterContext';

function Home() {
  const [state, dispatch] = useCounterContent();

  return (
    <>
      <h1>Oi</h1>
    </>
  );
}

export default Home;
