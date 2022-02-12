import * as actionTypes from '../constants/game-types'



export const getTopGamesReducer = (state = { games: {}, cart: []}, action) => {
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

        case actionTypes.ADD_GAME_TO_CART:
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
        default: 
        return state
    }
}

export const getGameDetailsReducer = (state = { game: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_GAME_DETAILS_REQUEST: 
        return {
            loading: true,
            game: []
        }
        case actionTypes.GET_GAME__DETAILS_SUCCESS:
            return {
                ...state,
                game: action.payload
            }
        
        case actionTypes.GET_GAME_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload 
            }
        case actionTypes.GET_GAME_DETAILS_RESET:
            return {
                    game: {}
            }
        default: 
        return state
    }
}