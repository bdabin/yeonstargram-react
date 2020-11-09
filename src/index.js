import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import Store from './Store';

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
