const Card = (props) => {

  <button>sds</button>




  return (
    <>
      <h2>{props.game.name}</h2>
      <h3>{props.game.id}</h3>
      <img src={props.background_image} alt={props.game.name} />
    </>
  )
}

export default Card