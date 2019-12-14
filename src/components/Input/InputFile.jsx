import React from 'react';
import styled from 'styled-components';
import Input from './Input.jsx';
import Image from 'components/Image';

const Root = styled(Input)`
	display: block;
`;

const getBase64 = (file) => {
	const reader = new FileReader();

	reader.readAsDataURL(file);
	return reader;
}

export default React.memo(({
	onChange = () => {},
	alt = 'alt',
	...props
}) => {
	const [ path, setPath ] = React.useState('');

	return <>
		<Root { ...props } 
			type="file"
			onChange={(e) => {
				getBase64(e.target.files[0])
					.onload = (load) => {
						setPath((load.explicitOriginalTarget || {}).result || '');
						onChange(e);
					};
			}} />
		{path && <Image 
			src={path}
			alt={alt} /> }
	</>;
});
