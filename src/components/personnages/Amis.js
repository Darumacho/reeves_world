import React from 'react';

export class Ami extends React.Component {
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
              <h2 class="blog-post-title" id="chosen">Les amis</h2>
              <br />
              <div class="miniContainer">
              <h3 className="subtitle">E. Gwiazdowski</h3>
              <p><u>Fonction :</u> Maire</p>
              <p><u>Lieu(x) de rencontre :</u> Sacramenbourg, Îles Lointaines</p>
              <p>E.Gwiazdowski est une magistrate experte en droit, actuellement maire de Sacramenbourg. Elle rencontre les Chosen Ones lors de leur arrivée dans la Contrée principale et les charge de dissoudre le raid Jhâva entravant la ville. Sa phrase fétiche et incontrable est le célèbre proverbe : "Nul ne peut se prévaloir de ses propres turpitudes".</p>
              <p>En plus d'avoir un nom imprononçable, E.Gwiazdowski possède un important éventail d''alinéas en tous genres, dédiés à profondément déstabiliser les ennemis.</p>
              <br />

              <h3 className="subtitle">Nod Ji'Hess</h3>
              <p><u>Fonction :</u> Jhâva renégat</p>
              <p><u>Lieu(x) de rencontre :</u> Sacramenbourg, Îles Lointaines</p>
              <p>Nod a déserté les rangs de l'ordre Jhâva peu de temps après le début du raid de Sacramenbourg. Il est un formidable artisan maîtrisant l'art de la transposition. Les Chosen Ones feront souvent appel à lui pour transposer les vestiges de puissants adversaires, afin d'en tirer une arme, un artefact ou une armure.</p>
              <p>Nod semble toujours avoir une anecdote intéressante à propos de ses anciens camarades tombés au combat, ce qui amène à penser qu'il est resté relativement longtemps au sein de l'ordre.</p>
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

export default Ami;