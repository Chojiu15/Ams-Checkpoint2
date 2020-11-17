import React from 'react';
import './Game.css';

export default function Game (props) {

    return (
        <ul>
            <li className='name'>{props.name}</li>
            <li>{props.rating}</li>
            <li>{props.released.substring(0, 4)}</li>
            
            {/* <li>{props.genres.map(e => e.name)}</li> */}
            <li>{Array.from(props.genres.map(e => e.name)).join(", ")}</li>

            <img src={props.background_image} alt={props.name}></img>    
        </ul>
        
    )

}