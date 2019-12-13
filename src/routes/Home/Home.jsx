import React from 'react';
import { connect } from 'react-redux';
import LoaderIterables from 'modules/LoaderIterables';
// import { withRouter } from 'react-router-dom';

import Post from 'modules/Post';

// const obj = {
//   title: 'title',
//   img: 'https://picsum.photos/id/985/400/400.jpg',
//   text: '',
//   likes: 0,
//   dislikes: 0,
//   created_at: ''
// };

// const str = JSON.stringify(obj);

// console.log('STRING:', typeof JSON.stringify(obj));
// console.log('OBJECT:', JSON.parse(str));

export default connect((state, props) => {
  return {
    // x: state.test.x
  };
})(
  React.memo(({ x }) => {
    return (
      <>
        <b>Home Page</b>
        <LoaderIterables>
          <Post />
          <Post />
        </LoaderIterables>
      </>
    );
  })
);
