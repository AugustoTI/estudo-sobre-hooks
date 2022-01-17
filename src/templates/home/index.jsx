import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFecth = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionRef = useRef(options);

  useEffect(() => {
    if (!isObjectEqual(urlRef.current, url)) {
      urlRef.current = url;
      setShouldLoad((prev) => !prev);
    }

    if (!isObjectEqual(optionRef.current, options)) {
      optionRef.current = options;
      setShouldLoad((prev) => !prev);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    setLoading(true);

    const fecthPosts = async () => {
      await new Promise((r) => setTimeout(r, 2000));

      try {
        const postsRes = await fetch(urlRef.current, optionRef.current);
        const postsJSON = await postsRes.json();
        if (!wait) {
          setResult(postsJSON);
          setLoading(false);
        }
      } catch (err) {
        if (!wait) {
          setLoading(false);
          console.log(err);
        }
      }
    };

    fecthPosts();

    return () => {
      wait = true;
    };
  }, [shouldLoad]);

  return [result, loading];
};

function Home() {
  const [postID, setPostID] = useState('');
  const [result, loading] = useFecth('https://jsonplaceholder.typicode.com/posts/' + postID, { abc: 123 });

  useEffect(() => {
    console.log(postID);
  }, [postID]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleClick = (id) => {
    setPostID(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((post) => (
            <div key={post.id}>
              <h1 onClick={() => handleClick(post.id)}>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <h1>{result.title}</h1>
            <p>{result.body}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
}

export default Home;
