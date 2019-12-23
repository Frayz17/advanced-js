import React from 'react';
import { connect } from 'react-redux';
import { BlockFlex } from 'components/Block';
import Typography from 'components/Typography';

export default connect((state, { stateName, index = 0 }) => {
  // console.log(state[stateName]);
  const { data } = state[stateName];
  return { ...data[index] };
})(
  React.memo((data) => {
    return (
      <BlockFlex
        style={{
          minHeight: '300px',
          width: '300px',
          backgroundColor: 'lightblue',
          margin: '10px 0',
          padding: '15px',
          border: '1px solid grey'
        }}
      >
        <BlockFlex
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Typography>{data.name}</Typography>
          <Typography>{data.text}</Typography>
          <Typography>{data.created_at}</Typography>
        </BlockFlex>
      </BlockFlex>
    );
  })
);
