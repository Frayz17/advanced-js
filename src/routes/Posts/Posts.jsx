import React from 'react';
import Post from 'modules/Post';
import LoaderIterables from 'modules/LoaderIterables';
import { TypographyHeader } from 'components/Typography';

export default React.memo(() => {
  return (
    <>
      <TypographyHeader>Posts page</TypographyHeader>
      <LoaderIterables
        stateName={'loaderIterablesPosts'}
        url="http://127.0.0.1:4000"
        query="/posts/"
        urlId={1}
      >
        <Post />
      </LoaderIterables>
    </>
  );
});
