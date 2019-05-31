import React from 'react';
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
      <div style={{ display: "flex" }}>
        <header>
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="/"><img src={require('./header.png')} alt=""/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to="/">Accueil</Link>
                </li>
                <li class="nav-item">
                  <Link to="/rain">Pluie fantastique</Link>
                </li>
                <li class="nav-item">
                  <Link to="/morpion">Jouer au morpion</Link>
                </li>
                <li class="nav-item">
                  <Link to="/top">Jouer à TopNumber</Link>
                </li>
                <li class="nav-item">
                  <Link to="/guidoune">Guidoune du jour</Link>
                </li>
                <li class="nav-item">
                  <Link to="/color">Changer la couleur de fond</Link>
                </li>
              </ul>
              <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Y'a rien à chercher" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
              </form>
            </div>
          </nav>
        </header>
      </div>
  );
}

export default Sidebar;