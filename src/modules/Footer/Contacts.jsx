import React from 'react';
import { connect } from 'react-redux';
import onToggleMap from './onToggleMap';
import ModalBox from 'components/ModalBox';
import MapModule from 'modules/MapModule';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { contactsButton } from './styles';
import { MapClosedButton } from './styles';

export default connect((state) => {
  return {
    isMapOpenFlag: (state.map || {}).isMapOpenFlag || false
  };
})(
  React.memo(({ isMapOpenFlag }) => {
    return (
      <>
        <Typography style={{ textAlign: 'center', marginBottom: '10px' }}>
          Waiting for Call <br />
          +(0)123-456-7890 <br />
          <Button style={contactsButton} onClick={onToggleMap}>
            We on a Map
          </Button>
        </Typography>

        {isMapOpenFlag && (
          <ModalBox>
            <MapModule />
            <MapClosedButton onClick={onToggleMap}>close</MapClosedButton>
          </ModalBox>
        )}
      </>
    );
  })
);
