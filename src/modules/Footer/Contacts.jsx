import React from 'react';
import { connect } from 'react-redux';
import MapModalBox, { onToggleMap } from 'modules/MapModalBox';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { contactsButtonStyle } from './styles';

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
          <Button style={contactsButtonStyle} onClick={onToggleMap}>
            We on a Map
          </Button>
        </Typography>

        {isMapOpenFlag && <MapModalBox />}
      </>
    );
  })
);
