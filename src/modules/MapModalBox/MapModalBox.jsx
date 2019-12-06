import React from 'react';
import ModalBox from 'components/ModalBox';
import InteractiveMap from 'components/InteractiveMap';
import Button from 'components/Button';
import closeBtnStyle from './closeBtnStyle';
import onToggleMap from './onToggleMap';

export default () => {
  return (
    <ModalBox>
      <InteractiveMap />
      <Button style={closeBtnStyle} onClick={onToggleMap}>
        close
      </Button>
    </ModalBox>
  );
};
