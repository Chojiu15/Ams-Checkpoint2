import { useState, useEffect} from 'react'
import Axios from 'axios'
import Game from './Game'
import Filter from './filter'

const GameList = () => {
    const [list, setList] = useState([])
    const [search, setSearch] = useState("")
console.log(list)
console.log(search)
    useEffect(() => {
    Axios.get('https://apis.wilders.dev/wild-games/games')
    .then(resp => setList(resp.data))
    }, [])
   const filterFunc =() => {
    console.log(search)
   }
    //console.log(newList)
    return (
        
        <div>
        <Filter/>
        {list.map((e) => <Game {...e} />)}
        </div>
    )
}
export default GameList