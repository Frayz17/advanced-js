import styled from 'styled-components';
import Block from 'components/Block';

const MenuBlock = styled(Block)`
  position: ${({ menuPosition = '' }) => {
    return menuPosition === '' ? 'static' : menuPosition;
  }}
  top: 0;
  left: 0;
  zindex: 2;
  width: 100%;
  backgroundcolor: #fff;
`;

export default MenuBlock;
