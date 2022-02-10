import * as actionTypes from '../constants/shopping-types'



const INITIAL_STATE = {
    games: [],
    cart: [],
    currentItem: null
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_GAME:
            return {
                ...state,
                currentItem: action.payload
            }
        default: 
        return state;
    }
}





