import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { 
	newStore,
	getStore,
	users,
	posts,
	comments,
	photos, 
	sliders,
	StoreProvider,
} from 'Services/Store';

newStore({
	users,
	posts,
	comments,
	photos,
	sliders,
});

setTimeout(() => {
	getStore().dispatch({
		type: 'CHANGE_NAME',
		payload: 'Ivan'
	});
}, 2000);

ReactDOM.render(<StoreProvider>
	<App />
</StoreProvider>, document.getElementById('root'));
