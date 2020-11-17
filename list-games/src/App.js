import './App.css';
import Header from './Components/Header'
import Game from './Components/Game'
import GameList from './Components/GameList'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const heading = 'Game List'
  return (
    <div className="App">
      <Header heading={heading}/>
      <GameList />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

    </div>
  );
}

export default App;

