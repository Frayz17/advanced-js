import React from 'react';
import Block from 'components/Block';
import { TypographyHeader } from 'components/Typography';
import loadData from './loadData';
import infinityLoad from './infinityLoad';

export const url = 'http://127.0.0.1:4000/posts/';
export const query = 1;

export default React.memo(({ chlildren }) => {
  const [data, setData] = useState([]);
  const [isEnable, setIsEnable] = useState(true);

  // onMount
  React.useEffect(() => {
    const localInfinityLoad = infinityLoad;

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
          collector.push(<Post key={i} index={i} />);
          i++;
        }
        return collector;
      })()}
    </Block>
  );
});
