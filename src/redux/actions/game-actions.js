import * as actionTypes from '../constants/game-types'
import axios from 'axios'



export const getTopGames = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_GAMES_REQUEST });
        const token = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_API_KEY}&client_secret=${process.env.REACT_APP_Client_Secret}&grant_type=client_credentials`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        const token = await response.json()
        console.log(token.access_token)
        const response = await fetch('https://api.twitch.tv/helix/games/top',
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token.access_token,
                    'Client-Id': process.env.REACT_APP_API_KEY,
                    'Content-Type': 'application/json'
                },
            })
        const data = await response.json()
        let dataArray = data.data
        let finalArray = dataArray.map(game => {
            let newURL = game.box_art_url
                .replace("{width}", "300")
                .replace("{height}", "300");
            game.box_art_url = newURL
            return game
        })
        dispatch({
            type: actionTypes.GET_GAMES_SUCCESS,
            payload: finalArray
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_GAMES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getGameDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_GAME_DETAILS_REQUEST})

        const {data} = await axios.get(`/game/${id}`);

        dispatch({
            type: actionTypes.GET_GAME__DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
            dispatch({
                type: actionTypes.GET_GAME_DETAILS_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}