import React from 'react';
import { connect } from 'react-redux';
import { getStore } from 'Services/Store';
import Block from 'components/Block';
import { TypographyHeader } from 'components/Typography';
import loadData from './loadData';
import infinityLoad from './infinityLoad';

export default connect((state, props) => {
  return {
    url: state.loaderIterables.url,
    query: state.loaderIterables.query,
    isLoadEnable: state.loaderIterables.isLoadEnable
  };
})(
  React.memo(({ url, query, isLoadEnable }) => {
    const [data, setData] = React.useState([]);

    // onMount
    React.useEffect(async () => {
      const localInfinityLoad = infinityLoad;
      const url = 'http://127.0.0.1:4000/posts/';
      const query = 1;

      getStore().dispatch({
        type: 'MERGE_DATA',
        payload: {
          url: 'http://127.0.0.1:4000/posts/',
          query: 1,
          data: [...state.data, payload.data]
        }
      });

      setData(loadData(url, query));
      window.addEventListener('scroll', localInfinityLoad());

      // onUnmount
      return () => {
        setData([]);
        window.removeEventListener('scroll', localInfinityLoad());
      };
    }, []);

    return (
      <Block>
        <TypographyHeader>Loader</TypographyHeader>
        {(() => {
          let i = 0,
            collector = [];

          while (i < data.length) {
            collector.push(
              <Block key={i} index={i}>
                {i}
              </Block>
            );
            i++;
          }
          return collector;
        })()}
      </Block>
    );
  })
);
