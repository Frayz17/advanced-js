import React from 'react';
import { loadData, infinityLoad, resetLoader } from './functions';
import LoadedItems from './LoadedItems';
import Block from 'components/Block';
import { TypographyHeader } from 'components/Typography';

export default React.memo(
  ({ dataLength, children, stateName, url, query, urlId }) => {
    // onMount
    React.useEffect(() => {
      const localInfinityLoad = infinityLoad(stateName);

      loadData(stateName, url, query, urlId);

      window.addEventListener('scroll', localInfinityLoad);

      // onUnmount
      return () => {
        resetLoader(stateName);
        window.removeEventListener('scroll', localInfinityLoad);
      };
    }, [stateName, url, query, urlId]);

    return (
      <Block>
        <TypographyHeader>Loader</TypographyHeader>
        <LoadedItems
          stateName={stateName}
          dataLength={dataLength}
          childrenEntity={children}
        />
      </Block>
    );
  }
);
