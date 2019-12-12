import React from 'react';
import { connect } from 'react-redux';
import LoaderIterables from 'modules/LoaderIterables';
// import { withRouter } from 'react-router-dom';

export default connect((state, props) => {
  return {
    // x: state.test.x
  };
})(
  React.memo(({ x }) => {
    return (
      <>
        <b>Home Page</b>
        <LoaderIterables />
      </>
    );
  })
);
