import React, { useState, useEffect } from 'react'
import api from '../api'
import Card from './Card'



export default function Games() {


    const [ games, setGames ] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [ token, setToken ] = useState('');
    const [ done, setDone ] = useState(false)

    const getAuthToken = async () => {
        
        const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_API_KEY}&client_secret=${process.env.REACT_APP_Client_Secret}&grant_type=client_credentials`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
        })
        const data = await response.json()
        console.log(data)
        getTopGames(data.access_token)
    }


    const getTopGames = async (token) => {

        const response = await fetch('https://api.twitch.tv/helix/games/top', 
        {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Client-Id' : process.env.REACT_APP_API_KEY,
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
        console.log('new array', finalArray[0].box_art_url)
        setGames(finalArray)
    }

    useEffect(() => {
        getAuthToken()
        
        
    },[])



    return (

        <>
        <div  class='d-flex flex-column align-items-center mt-5'>
        <div class="container">
            <h1 class='text-align-center'>Top 20 games on Twitch</h1>
            <div class='row'>
            {games.map(game => {
                return (
                    <div class='col'>
                    <Card
                    key={game.id}
                    onLoad={()=>setLoaded(true)}
                    src={game.box_art_url}
                    title={loaded ? game.name : null}
                    buttonName={loaded ? 'View' : null}
                    loaded={loaded}
                    game={game}
                    />
                    </div>
                )
            })}
            </div>
           </div>
        </div>
        </>
    )
}