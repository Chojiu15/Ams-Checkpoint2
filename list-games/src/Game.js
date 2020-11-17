import react, {useState} from 'react';
import { GameList } from './GameList';
import './Game.css'


export const Game = (props) => {
    const [favorite, getFavorite] = useState(false);

    const changeFav = () => {
        getFavorite(!favorite);
    }

    return(
        <div className="game">
            <h1>{props.name}</h1>
            <h4>{props.released}</h4>
            <div id="favorite"
            className={favorite ? "isFavorite" : "notFavorite"}
            onClick={changeFav}>
            </div>
        </div>
    )
}