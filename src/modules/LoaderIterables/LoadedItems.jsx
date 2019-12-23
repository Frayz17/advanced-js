import React from 'react';
import { connect } from 'react-redux';

export default connect((state, { stateName }) => {
  return {
    dataLength: ((state[stateName] || {}).data || []).length || 0
  };
})(
  React.memo(({ dataLength, childrenEntity, stateName }) => {
    return dataLength === 0
      ? ''
      : (() => {
          let i = 0;
          let collector = [];

          while (i < dataLength) {
            const index = i;
            const item = { ...childrenEntity };

            item.props = {
              ...childrenEntity.props,
              index,
              stateName
            };
            collector.push(<React.Fragment key={index}>{item}</React.Fragment>);
            i++;
          }
          return collector;
        })();
  })
);
