import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Game } from './Game';

export const GameList = () => {
    const [games, getGames] = useState([]);
    const [button, getButton] = useState(true);


    const getGame = () => {
        Axios.get('https://apis.wilders.dev/wild-games/games')
            .then(res => getGames(res.data))
    }
    const rating = (e) => {
        let filtered = games.filter (
            (e) => e.rating> 4.5)
            return (filtered),
            console.log(filtered)
    }
 
    useEffect(() => {
        getGame();
        rating();
    }, [])
    return (
        <div>
            {games.map(game => <Game{...game} filter={rating}/>)}
            <button value={button} onClick={rating}>Filter by rating</button>
        </div>
    )
}
