import React from 'react';
import { connect } from 'react-redux';
import { MenuBlock, MenuLinksWrapper } from './styled';
import MenuLinks from './MenuLinks';
import MenuBurger from './MenuBurger';

export default connect((state) => {
  return {
    displayMenuFlag: (state.menu || {}).displayMenuFlag || false
  };
})(
  React.memo(({ displayMenuFlag, isBurgerNeed = true, cssStr }) => {
    return (
      <MenuBlock cssStr={cssStr}>
        <MenuLinksWrapper
          className='menu__links-wrapper'
          displayMenuFlag={displayMenuFlag}>
          <MenuLinks />
        </MenuLinksWrapper>

        {isBurgerNeed && <MenuBurger displayMenuFlag={displayMenuFlag} />}
      </MenuBlock>
    );
  })
);
