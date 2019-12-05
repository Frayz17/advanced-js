import React from 'react';
import Copyright from './Copyright';
import Address from './Address';
import Contacts from './Contacts';
import Menu from 'modules/Menu';
import Block from 'components/Block';
import {
  addressContactsWrapper,
  footer,
  InformationBlock,
  MenuWrapper
} from './styles';

export default React.memo(() => {
  return (
    <Block style={footer}>
      <InformationBlock>
        <Copyright />

        <Block style={addressContactsWrapper}>
          <Address />
          <Contacts />
        </Block>
      </InformationBlock>

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
