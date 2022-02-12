import * as actionTypes from '../constants/shopping-types'


export const addToCart = (gameID, qty) => (dispatch, getState) => {
    console.log('getstate in addToCart', getState().getTopGames.games)
    const item = getState().getTopGames.games.find((game) => game.id === gameID);
    console.log(item)
    dispatch ({
      type: actionTypes.ADD_TO_CART,
      payload: {
        id: gameID,
        qty,
      },
    }); 
    localStorage.setItem("cart", JSON.stringify(getState().shop.cart));
  };

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