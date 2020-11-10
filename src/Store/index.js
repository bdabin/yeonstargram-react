import { createStore } from 'redux';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const reducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			return true;
		case LOGOUT:
			localStorage.removeItem('user');
			return false;

		default:
			return false;
	}
};
const Store = createStore(reducer, Boolean(localStorage.getItem('user')) || false);

export default Store;
