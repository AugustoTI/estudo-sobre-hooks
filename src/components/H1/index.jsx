import { useContext } from 'react';
import { GloblalContext } from '../../contexts/AppContext';

export const H1 = () => {
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
