import React from 'react';
import Typography from 'components/Typography';
import Block from 'components/Block';

export default React.memo(() => {
  const copyrightStr = `&copy; ${new Date().getFullYear()}`;

  return (
    <Block style={{ textAlign: 'center' }}>
      <Typography>
        {copyrightStr}
        <br />
        <Typography style={{ fontWeight: 'bold' }}>BetobeCorp</Typography>
      </Typography>
    </Block>
  );
});
