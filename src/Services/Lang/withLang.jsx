import React from 'react';
import { connect } from 'react-redux';

let savedLang = 'ru';
let savedAction;
const getLang = (langKey) => (langName) => {
	const Root = React.memo(() => {
		const [ value, setValue ] = React.useState('');

		(async () => {
			try {
				const data = await import('Services/Lang/'+ langKey +'/index.js');

				setValue(data.default[langName]);
				savedLang = langKey;
			}
			catch (err) {
				console.log('>>>>>>!', err)

			}
		})();

		return value;
	});
	return <Root />;
};

export default (ReactNode) => connect((state) => ({
	getLang: savedLang !== ((state.langs || {}).currentLang || 'ru') ?
		(savedAction = getLang((state.langs || {}).currentLang || 'ru')) :
		typeof savedAction === 'function' ?
			savedAction :
			(savedAction = getLang((state.langs || {}).currentLang || 'ru')),
}))(ReactNode);
