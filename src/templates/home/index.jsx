import { useState, Children, cloneElement } from 'react';

const s = {
  style: {
    fontSize: '40px',
  },
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => setIsOn((prevOn) => !prevOn);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedON = ({ isOn, children }) => (isOn ? children : null);

const TurnedOFF = ({ isOn, children }) => (isOn ? null : children);

const TurnButton = ({ isOn, onTurn, ...props }) => {
  return (
    <button {...props} onClick={onTurn}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

function Home() {
  return (
    <>
      <TurnOnOff>
        <TurnedON>
          As coisas que vão acontencer quando estiver ON <br />
        </TurnedON>
        <TurnedOFF>
          Aqui vem as coisas do OFF <br />
        </TurnedOFF>
        <TurnButton {...s} />
      </TurnOnOff>
    </>
  );
}

export default Home;
