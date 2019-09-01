export function sendProduct(data){
	console.log("actons", data)
	return {type: "ADD_PRODUCTS", payload: data};
}

export function deleteProductFromCart(id){
	return {type: "DELETE_PRODUCTS", payload: id};
}