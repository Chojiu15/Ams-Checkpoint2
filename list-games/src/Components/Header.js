import './Header.css'
const Header = (props) => {
    console.log(props.heading)
    return (
        <div className="hdiv">
            <h1>Welcome to {props.heading}</h1>
  
        </div>
    )
  }
  
  export default Header