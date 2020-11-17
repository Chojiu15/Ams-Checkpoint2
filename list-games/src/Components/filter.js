import {useState} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import './filter.css'
const Filter =(props)=> {
const [click, setClick] =useState("")

const cliker = (e) => {
    setClick(!click)
 props.setSearch(true)
}

return (
    <div className="cl">
<button className="but"onClick={(e) => cliker(e)} value={click? 'best' : 'all'}>{click? "Best Games" : "All Games"}</button>
    </div>
)
}
export default Filter