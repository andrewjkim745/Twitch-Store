import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'


const middleware = [thunk];

// const cartItemsInLocalStorage = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   : [];

// const INITIAL_STATE = {
//   getTopGames: {
//     cart: cartItemsInLocalStorage,
//   },
// };
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)))
    const persistor = persistStore(store)
    export { store, persistor };