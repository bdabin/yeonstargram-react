import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Routes from './Routes';

export default () => {
	return (
		<ThemeProvider theme={Theme}>
			<>
				<GlobalStyles />
				<Router>
					<Routes></Routes>
				</Router>
			</>
		</ThemeProvider>
	);
};
