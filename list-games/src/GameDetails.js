import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import { GameList } from './GameList';

export const GameDetails = (props) => {
    const [game, getGame] = useState([]);

    useEffect(() => {
        getGames();
    })
    const getGames = () => {
        Axios.get(`https://apis.wilders.dev/wild-games/games/${props.match.params.id}`)
        .then(res => getGame(res.data));
    }

    return(
        <div>
            <h1>{game.name}</h1>
            <img style={{width: "30%"}} className="gamePic" src={game.background_image} alt={game.id}/>
        </div>
    )
}