import { combineReducers } from "redux";
import shopReducer from "./reducers/shopping-reducer";

const rootReducer = combineReducers({
    shop: shopReducer,
});


export default rootReducer;