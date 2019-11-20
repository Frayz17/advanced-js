import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { 
	newStore,
	posts,
	nav,
	StoreProvider,
} from 'Services/Store';

newStore({
	posts,
	nav,
});

ReactDOM.render(<StoreProvider>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</StoreProvider>, document.getElementById('root'));
