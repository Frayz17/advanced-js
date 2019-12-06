import Block from './Block';
import styled from 'styled-components';

export default styled(Block)`
  display: flex;

  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};

  align-items: ${(props) => (props.alignItems ? props.alignItems : 'stretch')};

  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`;
