import * as actionTypes from '../constants/shopping-types'



const INITIAL_STATE = {
    cartItems: [],

}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.games.find(
                (game) => game.id === action.payload.id
              );
              console.log('item', item)
              console.log(state.cart)
              // Check if Item is in cart already
              const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
              );
        
              return {
                ...state,
                cart: inCart
                  ? state.cart.map((item) =>
                      item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                  : [...state.cart, { ...item, qty: 1 }],
              }
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_GAME:
            return {}
        default: 
        return state;
    }
}





