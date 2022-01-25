import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContent } from '../../contexts/CounterContext';

function Home() {
  const [state, actions] = useCounterContent();

  return (
    <>
      <Heading>{state.counter}</Heading>

      <Button onButtonClick={() => actions.increase()}>Increase</Button>
      <Button onButtonClick={() => actions.decrease()}>Decrease</Button>
      <Button onButtonClick={() => actions.reset()}>Reset</Button>
      <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>Set counter 10</Button>
      <Button onButtonClick={() => actions.asyncIncrease()}>Incrase async</Button>
      <Button onButtonClick={() => actions.asyncDecrease()}>Decrease async</Button>
    </>
  );
}

export default Home;
