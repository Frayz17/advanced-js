import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { 
	newStore,
	posts,
	nav,
	menu,
	users,
	StoreProvider,
} from 'Services/Store';
import GlobalStyles from './globalStyles.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

newStore({
	posts,
	nav,
	menu,
	users,
});

ReactDOM.render(<StoreProvider>
	<BrowserRouter>
		<App />
		<GlobalStyles />
	</BrowserRouter>
</StoreProvider>, document.getElementById('root'));
