import P from 'prop-types';
import { useMemo, useEffect, useState } from 'react';
import './App.css';

const Posts = ({ post }) => {
  console.log('Filho, renderizou');
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Posts.propTypes = {
  post: P.shape({
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  console.log('Pai renderizou');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((json) => setPosts(json))
        .catch((err) => console.log(err));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <input type="search" value={input} onChange={(e) => setInput(e.target.value)} />
      {posts.length === 0 && <p>Carregando seus posts...</p>}

      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Posts post={post} key={post.id} />);
      }, [posts])}
    </div>
  );
}

export default App;
