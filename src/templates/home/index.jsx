import { useEffect, useState } from 'react';
import './styles.css';

const useFecth = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fecthPosts = async () => {
      await new Promise((r) => setTimeout(r, 4000));

      try {
        const postsRes = await fetch(url);
        const postsJSON = await postsRes.json();
        setResult(postsJSON);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    fecthPosts();
  }, [url, options]);

  return [result, loading];
};

function Home() {
  const [result, loading] = useFecth('https://jsonplaceholder.typicode.com/posts');

  if (!loading) {
    console.log(result);
  }

  return (
    <>
      {loading && <h1>Loading...</h1>}

      {result &&
        result.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
    </>
  );
}

export default Home;
