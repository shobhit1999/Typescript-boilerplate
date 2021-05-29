import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import store from 'store';
import theme from 'theme';

import pkjson from '../package.json';
import App from './App';
import reportWebVitals from './reportWebVitals';

const APP_NAME = `${pkjson.name}@${pkjson.version}`;

if (process.env.NODE_ENV === 'production') {
	Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN, release: APP_NAME });
}

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
