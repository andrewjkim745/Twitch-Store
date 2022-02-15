import React, { useState, useEffect } from 'react'
import Card from './Card'
import { MDBContainer } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { getTopGames as listTopGames } from '../redux/actions/game-actions';
import { getGameDetails as listTopGameDetails } from '../redux/actions/game-actions';
import { Rings } from 'react-loader-spinner'


export default function Games() {



    const [done, setDone] = useState(false)
    const dispatch = useDispatch()
    const getTopGames = useSelector((state) => state.getTopGames);
    const getGameDetails = useSelector((state) => state.getGameDetails)
    const { games, loading, error } = getTopGames;
    const { game } = getGameDetails

    useEffect(() => {
        dispatch(listTopGames())
        dispatch(listTopGameDetails())
        console.log(game)
        setDone(true)
    }, [dispatch])

    return (
        <>
            {done ?
                <div data-aos='fade-up' class='d-flex flex-column align-items-center my-5 mb8'>
                    <div class="container">
                        <h1 class='text-align-center'>Top 20 games on Twitch</h1>
                        <div class='row'>
                            {loading ? <MDBContainer><Rings color="#00BFFF" height={1000} width={1000} /></MDBContainer> : error ? <h2>{error}</h2> : games.map(game => {
                                    return (
                                        <div class='col'>
                                            <Card
                                                key={game.id}
                                                game={game}
                                                title={game.name}
                                                src={game.box_art_url}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> : null}

        </>
    )
}