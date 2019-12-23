import React from 'react';
import LoaderIterables from 'modules/LoaderIterables';
import Post from 'modules/Post';
import UserRecord from 'modules/UserRecord';
import { TypographyHeader } from 'components/Typography';

export default React.memo(() => {
  return (
    <>
      <TypographyHeader>Home Page</TypographyHeader>

      {/* <LoaderIterables
        stateName={'loaderIterablesPosts'}
        url="http://127.0.0.1:4000"
        query="/posts/"
        urlId={1}
      >
        <Post stateName={'loaderIterablesPosts'} />
      </LoaderIterables> */}

      <LoaderIterables
        stateName={'loaderIterablesUserRecord'}
        url="http://127.0.0.1:4000"
        query="/records/"
        urlId={1}
      >
        <UserRecord />
      </LoaderIterables>
    </>
  );
});
