import React from 'react';
import StyledButton from './styled/StyledButton';
import Icon from 'components/Icon';
import onDisplayMenu from './onDisplayMenu';

export default React.memo(({ displayMenuFlag }) => {
  return (
    <StyledButton onClick={onDisplayMenu}>
      <Icon name={displayMenuFlag ? 'times' : 'bars'} />
    </StyledButton>
  );
});
