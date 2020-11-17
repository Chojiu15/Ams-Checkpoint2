import React, {useState} from 'react'

  


const Game = ({ name, background_image, released, rating }) => {
    const [favorite, setFavorite] = useState(false)
    return (
        <div>
            <h1>{name}{(favorite === false)
            ? <img alt="noheart" style={{height:"20px", width:"20px", marginLeft:"10px"}} src="https://i.pinimg.com/originals/2a/67/34/2a6734bab313c76305f6381310daf7d6.png"/>
            : <img alt="heart" style={{height:"20px", width:"20px", marginLeft:"10px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"/>
            }</h1>
            <img src={background_image} alt={name} style={{width:"400px", height:"400px"}}/>
            <h3>released: {released}</h3>
            <h3>rating: {rating}</h3>
            <button onClick={() => setFavorite(!favorite)}>Favorite</button>
        </div>
    )
}


export default Game