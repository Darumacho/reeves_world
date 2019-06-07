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
import {Journal} from './components/Journal.js';
import {Armes} from './components/Armes.js';
import {Boys} from './components/Boys.js';

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
          <Route path="/armes" component={Armes} />
          <Route path="/color" component={Random} />
          <Route path="/journal" component={Journal} />
          <Route path="/boys" component={Boys} />
        </Switch>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
