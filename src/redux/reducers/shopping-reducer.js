import * as actionTypes from '../constants/shopping-types'



const INITIAL_STATE = {
    cart: [],

}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            console.log('action payload',action.payload)
            const item = action.payload.item
              console.log('item', item)
              console.log('in shopreducer', state.cart)
              // Check if Item is in cart already
              const inCart = state.cart.find((item) =>
                item.id === action.payload.item.id ? true : false
              );
              console.log('inCart', inCart)
        
              return {
                ...state,
                cart: inCart
                  ? state.cart.map((item) =>
                      item.id === action.payload.item.id
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





