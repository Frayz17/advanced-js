import React from 'react';
import Copyright from './Copyright';
import Address from './Address';
import Contacts from './Contacts';
import Menu from 'modules/Menu';
import Block from 'components/Block';
import { BlockFlex } from 'components/Block';
import {
  footerStyle,
  FooterInfoWrapper,
  MenuWrapper,
  addressContactsWrapper,
  menuStyle
} from './styles';

export default React.memo(() => {
  return (
    <Block style={footerStyle}>
      <FooterInfoWrapper>
        <Copyright />

        <BlockFlex style={addressContactsWrapper}>
          <Address />
          <Contacts />
        </BlockFlex>
      </FooterInfoWrapper>

      <MenuWrapper>
        <Menu cssStr={menuStyle} isBurgerNeed={false} />
      </MenuWrapper>
    </Block>
  );
});
