import axios from "axios"
import { useEffect, useState } from "react"


const Game = (props) => {
    const [game, setGame] = useState()


useEffect(() => {
    axios.get(`https://apis.wilders.dev/wild-games/games/${props.match.params.id}`)
        .then(res => setGame(res.data))
}, [])

console.log(game);

return (
    <>
        <h2>{game.name}</h2>
        <h3>{game.id}</h3>
        <img src={game.background_image} alt={game.name}/>
    </>
)
}

export default Game