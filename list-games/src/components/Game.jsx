import axios from "axios"
import { useEffect, useState } from "react"

const Game = (props) => {
    const [game, setGame] = useState()
    const params = props.match.params;


useEffect(() => {
    axios.get(`https://apis.wilders.dev/wild-games/games/${params.id}`)
        .then(res => setGame(res.data))
}, [])

console.log(game);

return (
    <>
        <h2>{params.name}</h2>
        <h3>{params.id}</h3>
        <img src={params.background_image} alt={params.name}/>
    </>
)
}

export default Game