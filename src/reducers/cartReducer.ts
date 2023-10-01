import { ADD_TO_CART } from '../actions/types';

const initialState = {
	items: [
		{ id: 1, name: 'Товар 1', price: 100 },
		{ id: 2, name: 'Товар 2', price: 200 },
		{ id: 3, name: 'Товар 3', price: 300 }
	] 
};

const cartReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				items: [...state.items, action.payload],
			};
		default:
		return state;
	}
};

export default cartReducer;