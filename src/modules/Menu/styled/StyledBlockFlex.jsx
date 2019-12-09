import styled from 'styled-components';
import { BlockFlex } from 'components/Block';

const StyledBlockFlex = styled(BlockFlex)`
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    display: ${({ displayMenuFlag = false }) => {
      return displayMenuFlag ? 'block' : 'none';
    }};
    & > a {
      display: block;
      line-height: 24px;
    }
  }
`;

export default StyledBlockFlex;
