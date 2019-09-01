import {combineReducers} from "redux";
import userReducers from "./userReducers.js";
import adminReducer from './adminReducer';
import productReducers from './productReducers';

const rootReducer = combineReducers({
	user: userReducers,
	admin: adminReducer,
	product: productReducers
});

export default rootReducer;

