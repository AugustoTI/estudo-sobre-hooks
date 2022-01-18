import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

export const useFecth = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionRef = useRef(options);

  useEffect(() => {
    if (!isObjectEqual(urlRef.current, url)) {
      urlRef.current = url;
      setShouldLoad((should) => !should);
    }

    if (!isObjectEqual(optionRef.current, options)) {
      optionRef.current = options;
      setShouldLoad((should) => !should);
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
