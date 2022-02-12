import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import { shopReducer } from './reducers/shopping-reducer'
import { getTopGamesReducer, getGameDetailsReducer } from "./reducers/game-reducer";

export const reducer = combineReducers({
    shop: shopReducer,
    getTopGames: getTopGamesReducer,
    getGameDetails: getGameDetailsReducer
});


const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  getTopGames: {
    games: []
  },
  shop: {
    cart: cartItemsInLocalStorage,
    currentItem: null
  },
  getGameDetails: {
    game: {}
  }
};
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
  }
const persistedReducer = persistReducer(persistConfig, reducer)

    const store = createStore(persistedReducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)))
    const persistor = persistStore(store)
    export { store, persistor };