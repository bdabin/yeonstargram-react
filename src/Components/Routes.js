import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Feed from '../Routes/Feed';
import Explore from '../Routes/Explore';
import Search from '../Routes/Search';
import Home from '../Routes/Home';
import Profile from '../Routes/Profile';
import Join from '../Routes/Join';
import Login from '../Routes/Login';

const LoggedInRoutes = () => (
	<Switch>
		<Route exact path='/' component={Feed} />
		<Route path='/explore' component={Explore} />
		<Route path='/search' component={Search} />
		<Route path='/:username' component={Profile} />
	</Switch>
);

const LoggedOutRoutes = () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/join' component={Join} />
		<Route path='/login' component={Login} />
		{/* <Route exact path='/' component={Auth} /> */}
	</Switch>
);

const AppRouter = () => <LoggedOutRoutes />;

AppRouter.propTypes = {
	// isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
