import React from 'react';
import styled from 'styled-components';

const Component = styled.span`
	font-size: 18px;
`;

export default React.memo(({
	name = '',
	className = '',
	...props
}) => {
	return <Component { ...props } className={`fas fa-${name} ${className}`} />;
});
