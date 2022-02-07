import { combineReducers } from "redux";
import { shopReducer } from './reducers/shopping-reducer'
import { getTopGamesReducer, getGameDetailsReducer } from "./reducers/game-reducer";

export const rootReducer = combineReducers({
    shop: shopReducer,
    getTopGames: getTopGamesReducer,
    getGameDetails: getGameDetailsReducer
});


