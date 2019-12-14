import React from 'react';
import PostsHeader from './PostsHeader.jsx';
import PostsList from './PostsList.jsx';

export default React.memo(({ postsLength }) => {
  return (
    <>
      <PostsHeader />
      <PostsList />
    </>
  );
});
