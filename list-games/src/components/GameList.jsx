import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Game from './Game'
import Card from './Card'


const GameList = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        getGames()
    }, [])

    const getGames = () => {
        axios.get("https://apis.wilders.dev/wild-games/games/")
            .then(res => setGames(res.data))
    }

    return (
        <>
        {/* <Link exact to='/Recipes'><button >Best Games</button></Link> */}
            <h1>
                {games.map(e => {
                    return (
                        <div key={e.id}>
                            <Link to={{pathname:`/games/${e.id}`}}>
                                {e.name} 
                            </Link>
                        </div>
                    )
                })}
            </h1>
        </>
    )
}

export default GameList