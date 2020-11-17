import Axios from 'axios'
import Game from './game'
import React, {useState} from 'react'




const GameList = (props) => {
const[games, setGames] = useState([])

    Axios.get('https://wild-games.basile.vernouillet.dev/games/')
    .then(res => setGames(res.data))

    return(
        <>
        <h2>This is a list of games!</h2>
        <button>Best Games</button>
            <div> {games.map(data => <Game {...data} />)}</div>
        

    </>
    )
}


export default GameList