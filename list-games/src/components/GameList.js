import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Game from './Game.js';

export default function GameList() {

    const [games, setGames] = useState([]);     // "Games" will store the results
    const getGames = () => {
        // Determine complete URL to be used by Axios
        let urlToSearch = `https://apis.wilders.dev/wild-games/games/`

        // Get the API data
        Axios.get(urlToSearch)
            .then(console.log(`Getting url: ${urlToSearch}`))
            .then(element => { setGames(element.data) })
            .then(console.log(games))
    }


useEffect(() => {
    getGames()
}, []);

console.log(games)


    return (
        <>

            {/* List of games returned by API */}

            <p>List of games returned by API</p>

            <div className='grid'>
                {games.map(game =>
                    <Game key={game.id} className='resultCard' {...game} />)}
            </div>

        </>

    )
};