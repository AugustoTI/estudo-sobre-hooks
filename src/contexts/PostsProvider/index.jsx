import { useReducer } from 'react';
import { PostsContext } from './context';
import { reducer } from './reducer';
import { data } from './data';

//eslint-disable-next-line
export const PostsProvider = ({ children }) => {
  const [postsState, postsDispacth] = useReducer(reducer, data);

  return <PostsContext.Provider value={{ postsState, postsDispacth }}> {children} </PostsContext.Provider>;
};
