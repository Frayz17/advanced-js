import React from 'react';
import { withLang } from 'Services/Lang';
import Typography from 'components/Typography';

export default withLang(React.memo(({ getLang = () => {} }) => {
	return <Typography>{getLang('title')}</Typography>;
}));
