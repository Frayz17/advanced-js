import React from 'react';
import { connect, getState } from 'react-redux';
import Block from 'components/Block';
import { TypographyHeader } from 'components/Typography';
import loadData from './loadData';
import infinityLoad from './infinityLoad';
import resetLoader from './resetLoader';

import DataFrame from './DataFrame';

export default connect((state, props = {}) => {
  return {
    dataLength: (state.loaderIterables.data || []).length || 0
  };
})(
  React.memo(({ dataLength, children, props = {} }) => {
    // onMount
    React.useEffect(() => {
      const localInfinityLoad = infinityLoad();
      const url = 'http://127.0.0.1:4000/posts/';
      const query = 1;

      loadData(url, query);
      window.addEventListener('scroll', localInfinityLoad);

      // onUnmount
      return () => {
        resetLoader();
        window.removeEventListener('scroll', localInfinityLoad);
      };
    }, []);

    // console.log(
    //   'children',
    //   React.Children.map((child) => child)
    // );

    React.Children.map(children, (child) => {
      console.log('hi from child', child);
    });

    return (
      <Block>
        <TypographyHeader>Loader</TypographyHeader>
        {(() => {
          let i = 0,
            collector = [];

          while (i < dataLength) {
            collector.push(<DataFrame key={i} index={i} {...props} />);
            i++;
          }
          return collector;
        })()}
      </Block>
    );
  })
);
