import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import Store from './store';

ReactDOM.render(
	<Provider store={Store}>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</Provider>,
	document.getElementById('root')
);
