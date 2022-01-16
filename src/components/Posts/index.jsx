import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context.js';
import { loadPosts } from '../../contexts/PostsProvider/actions';

export const Posts = () => {
  const inMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispacth } = postsContext;

  useEffect(() => {
    loadPosts(postsDispacth).then((funcDisparadora) => {
      if (inMounted.current) {
        funcDisparadora();
      }
    });

    return () => (inMounted.current = false);
  }, [postsDispacth]);

  return (
    <div>
      <h1>Posts</h1>

      {postsState.loading && <p>Carregando posts...</p>}

      {postsState.posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
