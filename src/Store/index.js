import { createStore } from 'redux';

const reducer = (state, action) => {
	switch (action.type) {
		case 'test':
			break;

		default:
			break;
	}
};
const Store = createStore(reducer);

export default Store;
