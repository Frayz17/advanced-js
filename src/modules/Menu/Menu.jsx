import React from 'react';
import { connect } from 'react-redux';
import { MenuBlock, StyledBlockFlex } from './styled';
import MenuLinks from './MenuLinks';
import MenuBurger from './MenuBurger';

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
            displayMenuFlag={displayMenuFlag}
          >
            <MenuLinks />
          </StyledBlockFlex>

          {isBurgerNeed && <MenuBurger displayMenuFlag={displayMenuFlag} />}
        </MenuBlock>
      );
    }
  )
);
