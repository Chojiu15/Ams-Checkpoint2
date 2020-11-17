import react, {useState} from 'react';
import './Game.css'
import {Link} from 'react-router-dom';
import {GameList} from './GameList';


export const Game = ({name, released, id, rating}) => {
    const [favorite, getFavorite] = useState(false);

    const changeFav = () => {
        getFavorite(!favorite);
    }

    return(
        <div>
        <div className="game">
            <h1>{name}</h1>
            <h4>{released}</h4>
            <div id="favorite"
            className={favorite ? "isFavorite" : "notFavorite"}
            onClick={changeFav}>
                <br/>
                <h4>{rating}</h4>
            </div>
            <Link to={{pathname: `/${id}`}}>
      <button className="bttn">See More</button>
      </Link>
        </div>
        
        </div>
    )
}