import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import GameList from './components/GameList'
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <Header title={"Joeway's"} />
      <Router>
        <Switch>
          <Route exact path='/' component={GameList} />
          <Route exact path='/:id' component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
