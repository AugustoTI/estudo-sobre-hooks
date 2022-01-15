import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';

function Home() {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  );
}

export default Home;
