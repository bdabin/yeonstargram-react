import { createStore } from 'redux';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const UPLOAD = 'UPLOAD';

const localUser = localStorage.getItem('user');

const defaultStore = {
	isLoggedIn: Boolean(localUser) || false,
	user: JSON.parse(localUser) || {},
	uploadImg: {
		data: {},
		image: ''
	}
};

export const loginSuccess = (user) => {
	return {
		type: LOGIN,
		user
	};
};

export const logoutSuccess = () => {
	return {
		type: LOGOUT
	};
};

export const uploadImg = (img) => {
	return {
		type: UPLOAD,
		uploadImg: {
			data: img.data,
			image: img.image
		}
	};
};

const reducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem('user', JSON.stringify(action.user));
			return {
				...state,
				isLoggedIn: true,
				user: action.user
			};
		case LOGOUT:
			localStorage.removeItem('user');
			return {
				...state,
				isLoggedIn: false,
				user: {}
			};
		case UPLOAD:
			return {
				...state,
				uploadImg: {
					data: action.uploadImg.data,
					image: action.uploadImg.image
				}
			};
		default:
			return state;
	}
};
const Store = createStore(
	reducer,
	defaultStore,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
