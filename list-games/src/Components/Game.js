import { Card } from 'react-bootstrap'
import {useState} from 'react'
import './Game.css'


const Game = (props) => {
    console.log(props)
    const [ love, setLove] = useState("")
    const [fav, setFav] = useState("")
    console.log(love)
    console.log(fav)

    const toggle = (e) => {
        setLove(!love)
        e.preventDefault()
        if (!love) {
            setFav(e.target.value.concat(" "+fav)) }
        else {
            setFav("")
        }
    }
    return (
        <div className="gcard">
        <Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.background_image} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
        <p>{props.rating}</p>
        <p>{props.released}</p>
    </Card.Text>
    <button variant="primary" className={love? 'isOnline' : 'isOffline'} value={props.name} onClick={(e) => toggle(e)}>♡</button>
  </Card.Body>
</Card>
        </div>
    )
}
export default Game