import React from 'react';
import { Route, Switch } from "react-router-dom";
import {Accueil} from './components/Accueil.js';
import {Random} from './components/Random.js';
import {Rain} from './components/Rain.js';
import {Game} from './components/Morpion.js';
import {Sidebar} from './Sidebar.js';
import {Daily} from './components/Daily.js';
import {TopGame} from './components/TopGame.js';
import {Video} from './components/Video.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <React.Fragment>
      <Sidebar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/rain" component={Rain} />
          <Route path="/morpion" component={Game} />
          <Route path="/top" component={TopGame} />
          <Route path="/guidoune" component={Daily} />
          <Route path="/video" component={Video} />
          <Route path="/color" component={Random} />
        </Switch>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
