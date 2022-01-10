import P from 'prop-types';
import { useMemo, useEffect, useState, useRef } from 'react';
import './App.css';

const Posts = ({ post, action }) => {
  console.log('Filho, renderizou');
  return (
    <div className="post">
      <h1 onClick={() => action(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Posts.propTypes = {
  post: P.shape({
    title: P.string,
    body: P.string,
  }),
  action: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  const queryInput = useRef(null);

  console.log('Pai renderizou');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    queryInput.current.focus();
  }, [input]);

  const handleClick = (value) => {
    setInput(value);
  };

  return (
    <div className="App">
      <input type="search" ref={queryInput} value={input} onChange={(e) => setInput(e.target.value)} />
      {posts.length === 0 && <p>Carregando seus posts...</p>}

      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Posts action={handleClick} post={post} key={post.id} />);
      }, [posts])}
    </div>
  );
}

export default App;
