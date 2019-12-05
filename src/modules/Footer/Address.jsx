import React from 'react';
import Typography from 'components/Typography';

export default React.memo(() => {
  return (
    <Typography
      style={{
        textAlign: 'center',
        marginBottom: '10px'
      }}>
      BetobeCorp <br /> Miami <br />
      SW 26th St
    </Typography>
  );
});
