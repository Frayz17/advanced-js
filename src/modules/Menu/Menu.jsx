import React from 'react';
import { connect } from 'react-redux';
import { MenuBlock, StyledBlockFlex, StyledButton } from './styled';
import Icon from 'components/Icon';
import MenuLinks from './MenuLinks';
import onDisplayMenu from './onDisplayMenu';

export default connect((state) => {
  return {
    displayMenuFlag: (state.menu || {}).displayMenuFlag || false
  };
})(
  React.memo(
    ({
      displayMenuFlag,
      menuPosition = '',
      styleLinksContainer = {},
      isBurgerNeed = true
    }) => {
      return (
        <MenuBlock menuPosition={menuPosition}>
          <StyledBlockFlex
            style={styleLinksContainer}
            displayMenuFlag={displayMenuFlag}>
            <MenuLinks />
          </StyledBlockFlex>

          {isBurgerNeed && (
            <StyledButton onClick={onDisplayMenu}>
              <Icon name={displayMenuFlag ? 'times' : 'bars'} />
            </StyledButton>
          )}
        </MenuBlock>
      );
    }
  )
);
