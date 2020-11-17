
import './App.css';
import { GameList } from './GameList';
import { Header } from './Header';
import {Game} from './Game';

function App() {
  const name = "Game List DB"
  return (
    <div className="App">
      <Header name={name}/>
      <GameList/>
    </div>
  );
}

export default App;
