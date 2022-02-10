import React, { useState, useEffect } from 'react'
import api from '../api'
import Card from './Card'
import { MDBContainer } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { getTopGames as listTopGames } from '../redux/actions/game-actions';
import Skeleton from 'react-loading-skeleton';
import { render } from '@testing-library/react';
import { connect } from "react-redux";
import { Rings } from 'react-loader-spinner'


function Games({ gamesInfo }) {



    const [done, setDone] = useState(false)
    const dispatch = useDispatch()
    const getTopGames = useSelector((state) => state.getTopGames);
    const { games, loading, error } = getTopGames;

    useEffect(() => {
        dispatch(listTopGames())
        setDone(true)
    }, [dispatch])

    return (

        <>
            {done ?
                <div class='d-flex flex-column align-items-center mt-5'>
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

const mapStateToProps = (state) => {
    return {
        gamesInfo: state.shop.games,
    };
};

export default connect(mapStateToProps)(Games);