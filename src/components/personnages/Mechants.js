import React from 'react';

export class Mechant extends React.Component {
  render() {
      return (
        <div className="journalContainer">
        <div className="journal">
        <React.Fragment>     
<div class="blog-header">
      <div class="container">
        <h1 class="blog-title">Personnages</h1>
      </div>
    </div>
    </React.Fragment>
  <React.Fragment>
    <div class="container">
      <div >
        <div class="blog-main">
        <nav class="blog-pagination">
        <a class="btn btn-outline-primary" href="/persos">Les Chosen Ones</a>
          <a class="btn btn-outline-primary" href="/divin">Les Divinités</a>
          <a class="btn btn-outline-primary" href="/ami">Les amis</a>
          <a class="btn btn-outline-primary" href="/mechant">Les méchants</a>
          <a class="btn btn-outline-primary" href="/compagnon">Les compagnons</a>
        </nav>
          <div class="blog-post">
              <h2 class="blog-post-title" id="chosen">Les méchants</h2>
              <br />
              <div class="miniContainer">
              <h3 className="subtitle">Gilles</h3>
              <p>Gilles est la Divinité de la Connaissance, représentant du Savoir et de l'Esprit, Première Force du Lateralus.</p>
              <p>Il a été doté de la Doctrine C++ juste après la Création, qu'il a dû partager avec Claude. Les écrits restent très flous concernant le déroulement exact des évènements, mais il est l'un des deux acteurs principaux du Schisme, menant à son contrôle total sur la Connaissance, et l'exil de Claude dans les Profondeurs.</p>
              <p>Les Chosen Ones sont ses envoyés, qu'il a nommé à raison d'un par contrée. Il redoute énormément la Corruption++, qui ferait s'effondrer la Connaissance sur l'Univers entier.</p>
              <br />

              <h3 className="subtitle">Claude</h3>
              <p>Claude est la Divinité des Profondeurs, représentant du Pouvoir et du Corps, Seconde Force du Lateralus.</p>
              <p>Tout comme Gilles, il fût doté de la Doctrine C++ après la Création, mais décida de créer sa propre Doctrine, en tant que nouvelle force destinée à résoudre l'Équilibre. De cette décision vint le Schisme, Claude contraint de s'exiler dans les Profondeurs, d'où émergeront les Jhâvas ainsi que la Corruption++, des milliers de siècles plus tard.</p>
              <p>Claude a nommé les Garbage Collectors en tant qu'émissaires pour lentement reconquérir la Terre et faire s'effondrer la Connaissance, seul moyen pour que l'Univers ne devienne qu'une seule et même masse.</p>
              <br />

              <h3 className="subtitle">Guillaume</h3>
              <p>Guillaume est la Divinité de la Terre, représentant de l'Équilibre et de l'Âme, Troisième Force du Lateralus.</p>
              <p>Il est le Juge Impartial, détenteur de la Doctrine PHP, et gardien du monde des mortels, formant la césure entre la Connaissance et les Profondeurs. Il guide les Chosen Ones dans leur quête contre la Corruption++, omniprésent mais pas omniscient.</p>
              <p>En tant que représentant de l'Équilibre, Guillaume n'a nommé aucun émissaire, mais se voit accueillir ceux des autres Divinités.</p>
              <br />
              </div>
        </div>
        <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#top">Haut de page</a>
          </nav>
        </div>
      </div>
    </div>
  </React.Fragment>
      </div>
      </div>
      );
  }
}

export default Mechant;