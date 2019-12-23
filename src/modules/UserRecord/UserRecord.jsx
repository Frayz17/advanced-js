import React from 'react';
import { getState } from 'Services/Store';
import { BlockFlex } from 'components/Block';
import Typography, { TypographyHeader } from 'components/Typography';

export default React.memo(({ stateName, index }) => {
  const { data } = getState()[stateName];
  const userData = data[index];

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
        <TypographyHeader>{userData.name}</TypographyHeader>
        <Typography>{userData.text}</Typography>
        <Typography>{userData.created_at}</Typography>
      </BlockFlex>
    </BlockFlex>
  );
});
