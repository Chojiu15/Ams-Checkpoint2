
import './App.css';
import { GameList } from './GameList';
import { Header } from './Header';
import {Game} from './Game';
import {GameDetails} from './GameDetails'
import {BrowserRouter as Router , Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {
  const name = "Game List DB"
  return (
    <BrowserRouter>
      <Switch>
    <div className="App">
      <Header name={name}/>
      <Route path="/:id" component={GameDetails}/>
      <Route path="/" component={GameList}/>
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
