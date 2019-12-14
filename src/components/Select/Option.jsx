import React from 'react';
import Block, { BlockFlex } from 'components/Block';
import Button from 'components/Button';
import Typography from 'components/Typography';
import styled from 'styled-components';

// export default styled.input`
// 	border: 1px solid red;
// 	padding: 8px 14px;
// `;

export default React.memo(() => (
    <>
        <BlockFlex>
            <Button>
                <Icon name="chevron-down" />
            </Button>
            <Typography>
                {currentValue || ''}
            </Typography>
        </BlockFlex>
        <Block>

        </Block>
    </>
))
