import styled from 'styled-components';
import Button from 'components/Button';

const StyledButton = styled(Button)`
  display: none;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

export default StyledButton;
