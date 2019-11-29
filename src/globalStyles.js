import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	body {
		margin: 0;
	}
	#root {
		user-select: none;
		padding-top: 26px;
	}
	button,
	*:focus,
	*:active,
	*::-moz-focus-inner {
		outline :none !important;
		outline-style: none !important;
	}
	* {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
	}
`;
