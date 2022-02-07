import * as actionTypes from './shopping-types'



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
            return {}
        default: 
        return state;
    }
}

export const getTopGames = (state = { games: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_GAMES_REQUEST: 
        return {
            loading: true,
            games: []
        }
        case actionTypes.GET_GAMES_SUCCESS:
        return {
            loading: false,
            games: action.payload
        }
        case actionTypes.GET_GAMES_FAIL:
            return {
                loading: false,
                error: action.payload 
            }
        case actionTypes.GET_GAMES_RESET:
            return {
                    games: {}
            }
        default: 
        return state
    }
}



