import * as actionTypes from '../constants/shopping-types'


// export const addToCart = (gameID) => {
//     return {
//         type: actionTypes.ADD_TO_CART,
//         payload: {
//             id: gameID
//         }
//     }
// };

export const removeFromCart = (gameID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: gameID,
        }
    }
}

export const adjustQty = (gameID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: gameID,
            qty: value,
        }
    }
}


export const loadCurrentGame = (game) => {
    return {
        type: actionTypes.LOAD_CURRENT_GAME,
        payload: game
    }
}