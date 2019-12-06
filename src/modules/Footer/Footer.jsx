import React from 'react';
import Copyright from './Copyright';
import Address from './Address';
import Contacts from './Contacts';
import Menu from 'modules/Menu';
import Block from 'components/Block';
import { BlockFlex } from 'components/Block';
import { footerStyle, FooterInfoWrapper, MenuWrapper } from './styles';

export default React.memo(() => {
  return (
    <Block style={footerStyle}>
      <FooterInfoWrapper>
        <Copyright />

        <BlockFlex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          style={{ marginBottom: '10px', textAlign: 'center' }}
        >
          <Address />
          <Contacts />
        </BlockFlex>
      </FooterInfoWrapper>

      <MenuWrapper>
        <Menu
          styleMenuBlock={{
            position: 'relative'
          }}
          styleLinksContainer={{
            display: 'flex',
            flexDirection: 'column'
          }}
          styleLinkItems={{
            marginBottom: '10px'
          }}
          isBurgerNeed={false}
        />
      </MenuWrapper>
    </Block>
  );
});
