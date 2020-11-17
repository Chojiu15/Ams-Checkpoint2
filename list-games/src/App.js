import './App.css';
import Header from './Components/Header'
import Game from './Components/Game'
import GameList from './Components/GameList'


function App() {
  const heading = 'Game List'
  return (
    <div className="App">
      <Header heading={heading}/>
      <GameList />


    </div>
  );
}

export default App;

