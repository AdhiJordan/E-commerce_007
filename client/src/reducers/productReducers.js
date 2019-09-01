const userReducers = (state = {product: []}, action) => {
	
	switch(action.type){
		case "ADD_PRODUCTS":
		return {product: [...state.product.concat(action.payload)]};
		break;

		case "DELETE_PRODUCTS":
		return {
			product: [
				...state.product.slice(0, action.payload),
				...state.product.slice(action.payload + 1)
			]
		}
		break;

		default:
		return state;
	}
}

export default userReducers;