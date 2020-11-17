import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Game } from './Game';

export const GameList = () => {
    const [games, getGames] = useState([]);


    const getGame = () => {
        Axios.get('https://apis.wilders.dev/wild-games/games')
            .then(res => getGames(res.data))
    }

    useEffect(() => {
        getGame();
    })
    return (
        <div>
            {games.map(game => <Game{...game} />)}
        </div>
    )
}
