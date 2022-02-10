import * as actionTypes from '../constants/game-types'



export const getTopGamesReducer = (state = { games: {}}, action) => {
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
            case actionTypes.GET_GAME__DETAILS_SUCCESS:
                return {
                    ...state,
                        game: action.payload
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