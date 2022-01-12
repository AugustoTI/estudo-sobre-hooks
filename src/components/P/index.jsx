import { useContext } from 'react';
import { GloblalContext } from '../../contexts/AppContext';

export const P = () => {
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
