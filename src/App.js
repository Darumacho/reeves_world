import React from 'react';
import { Route, Switch } from "react-router-dom";
import {Accueil} from './components/Accueil.js';
import {Montreal} from './components/Montreal.js';
import {Game} from './components/Morpion.js';
import {Sidebar} from './Sidebar.js';
import {Daily} from './components/Daily.js';
import {TopGame} from './components/TopGame.js';
import {Video} from './components/Video.js';
import {Journal} from './components/Journal.js';
import {Armes} from './components/Armes.js';
import {Boys} from './components/Boys.js';
import {Story} from './components/Story.js';
import {Persos} from './components/Persos.js';
import {Divin} from './components/personnages/Divin.js';
import {Ami} from './components/personnages/Amis.js';
import {Mechant} from './components/personnages/Mechants.js';
import {Compagnon} from './components/personnages/Compagnons.js';
import {Lieux} from './components/Lieux.js';
import {Contree} from './components/lieux/Contree.js';
import {Mineur} from './components/lieux/Mineur.js';
import {Heros} from './components/Heros.js';
import {Test} from './components/TestBDD.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <React.Fragment>
      <Sidebar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/montreal" component={Montreal} />
          <Route path="/morpion" component={Game} />
          <Route path="/top" component={TopGame} />
          <Route path="/guidoune" component={Daily} />
          <Route path="/video" component={Video} />
          <Route path="/armes" component={Armes} />
          <Route path="/story" component={Story} />
          <Route path="/persos" component={Persos} />
          <Route path="/divin" component={Divin} />
          <Route path="/ami" component={Ami} />
          <Route path="/mechant" component={Mechant} />
          <Route path="/compagnon" component={Compagnon} />
          <Route path="/lieux" component={Lieux} />
          <Route path="/contree" component={Contree} />
          <Route path="/mineur" component={Mineur} />
          <Route path="/journal" component={Journal} />
          <Route path="/boys" component={Boys} />
          <Route path="/heros" component={Heros} />
          <Route path="/contact" component={Test} />
        </Switch>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
