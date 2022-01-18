import { useCallback, useEffect, useState } from 'react';

const useAysnc = (asyncFunction, shouldRun) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const run = useCallback(() => {
    setResult(null);
    setError(null);
    setStatus('pending');

    return asyncFunction()
      .then((res) => {
        setStatus('settled');
        setResult(res);
      })
      .catch((err) => {
        setStatus('Error');
        setError(err);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, result, error, status];
};

const dataFecth = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsJSON = await posts.json();

  return postsJSON;
};

function Home() {
  const [reDataFecth, result, error, status] = useAysnc(dataFecth, true);

  if (status === 'idle') {
    return <pre>Nada executando.</pre>;
  }

  if (status === 'pending') {
    return <pre>Loading...</pre>;
  }

  if (status === 'error') {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }

  return 'Vish, deu muito ruim aqui...';
}

export default Home;
