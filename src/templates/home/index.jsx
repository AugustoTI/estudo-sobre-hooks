import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function Home() {
  const [counted, setConted] = useState([1, 2, 3, 4, 5]);

  const divRef = useRef();

  const handleClick = () => {
    setConted((prevC) => [...prevC, +prevC.slice(-1) + 1]);
  };

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 3000) divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  return (
    <>
      <button onClick={handleClick}>Contend {counted.slice(-1)}</button>
      <div ref={divRef} style={{ width: '100px', height: '120px', overflowY: 'auto' }}>
        {counted.map((num) => {
          return <p key={`n-${num}`}>{num}</p>;
        })}
      </div>
    </>
  );
}

export default Home;
