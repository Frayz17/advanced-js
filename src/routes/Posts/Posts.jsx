import React from 'react';
import { connect } from 'react-redux';
import Post from 'modules/Post';
import { TypographyHeader } from 'components/Typography';
import loadPosts from './loadPosts.js';
import infinityLoad from './infinityLoad';
import resetPosts from './resetPosts';

export default connect((state) => {
  return {
    postsLength: (state.posts.data || []).length || 0
  };
})(
  React.memo(({ postsLength }) => {
    // onMount
    React.useEffect(() => {
      const localInfinityLoad = infinityLoad();

      loadPosts(1);
      window.addEventListener('scroll', localInfinityLoad);

      // onUnmount
      return () => {
        resetPosts();
        window.removeEventListener('scroll', localInfinityLoad);
      };
    }, []);

    return (
      <>
        <TypographyHeader>Posts page</TypographyHeader>
        {(() => {
          let i = 0,
            collector = [];

          while (i < postsLength) {
            collector.push(<Post key={i} index={i} />);
            i++;
          }
          return collector;
        })()}
      </>
    );
  })
);
