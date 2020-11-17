import './App.css';
import GameList from './components/GameList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header title='list-games' />

        <GameList />

      </header>
    </div>
  );
}

export default App;
