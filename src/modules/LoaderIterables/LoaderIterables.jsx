import React from 'react';
import { connect, getState } from 'react-redux';
import Block from 'components/Block';
import { TypographyHeader } from 'components/Typography';
import loadData from './loadData';
import infinityLoad from './infinityLoad';
import resetLoader from './resetLoader';

export default connect((state, { stateName } = {}) => {
  return {
    dataLength: (state.loaderIterables.data || []).length || 0,
    stateName
  };
})(
  React.memo(({ dataLength, children, stateName }) => {
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

    return (
      <Block>
        <TypographyHeader>Loader</TypographyHeader>
        {dataLength === 0
          ? ''
          : (() => {
              let i = 0,
                collector = [];

              while (i < dataLength) {
                const index = i;
                const item = { ...children };

                console.log('index', index);

                item.props = {
                  ...children.props,
                  index
                };
                collector.push(
                  <React.Fragment key={index}>{item}</React.Fragment>
                );
                i++;
              }
              return collector;
            })()}
      </Block>
    );
  })
);
