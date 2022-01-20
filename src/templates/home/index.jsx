import { useDebugValue, useEffect, useState } from 'react';

const useMediaQuery = (mediaQuery) => {
  const [macth, setMacth] = useState(false);

  useDebugValue('Media query pra tela de 900px');

  useEffect(() => {
    const mediaMacth = window.matchMedia(mediaQuery);

    const handleChange = () => {
      setMacth(mediaMacth.matches);
    };

    mediaMacth.addEventListener('change', handleChange);

    return () => {
      mediaMacth.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return macth;
};

function Home() {
  const huge = useMediaQuery('(max-width:900px)');
  const background = huge ? 'green' : null;

  return (
    <>
      <h1 style={{ background }}>Oi</h1>
    </>
  );
}

export default Home;
