import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Feed from '../Routes/Feed';
import Explore from '../Routes/Explore';
import Search from '../Routes/Search';
import Home from '../Routes/Home';
import Profile from '../Routes/Profile';
import Join from '../Routes/Join';
import Login from '../Routes/Login';
import WritePost from '../Routes/WritePost';
import Error404 from '../Routes/Error404';
import { connect } from 'react-redux';
import EditProfile from '../Routes/EditProfile';

const LoggedInRoutes = () => (
	<Switch>
		<Route exact path='/' component={Feed} />
		<Route path='/explore' component={Explore} />
		<Route path='/search' component={Search} />
		<Route path='/write' component={WritePost} />
		<Route path='/profile/edit' component={EditProfile} />
		<Route path='/:username' component={Profile} />
		<Route component={Error404} />
	</Switch>
);

const LoggedOutRoutes = () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/join' component={Join} />
		<Route path='/login' component={Login} />
		<Route component={Error404} />
	</Switch>
);

const AppRouter = ({ isLoggedIn }) => {
	return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

const mapState = (state) => {
	return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapState)(AppRouter);
