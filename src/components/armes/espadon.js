import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Greatsword extends Component {
  render() {
    return (
      <div>
      <nav class="blog-pagination">
        <a class="btn btn-outline-primary" href="/armes">Épées</a>
        <a class="btn btn-outline-primary" href="/marteau">Marteaux</a>
        <a class="btn btn-outline-primary" href="/hache">Haches</a>
        <a class="btn btn-outline-primary" href="/ceste">Cestes</a>
        <a class="btn btn-outline-primary" href="/dague">Dagues</a>
        <a class="btn btn-outline-primary" href="/martial">Armes martiales</a>
        <a class="btn btn-outline-primary" href="/espadon">Espadons</a>
        <a class="btn btn-outline-primary" href="/ornement">Ornements</a>
        <a class="btn btn-outline-primary" href="/lance">Lances</a>
        <a class="btn btn-outline-primary" href="/faux">Faux</a>
        <a class="btn btn-outline-primary" href="/baguette">Baguettes</a>
        <a class="btn btn-outline-primary" href="/omniclasse">Omniclasse</a>
      </nav>
      <div className="tabContainer">
        <div className="tabHeader">Les espadons sont les plus grandes armes du jeu, généralement réservés aux héros de forte carrure. Ils infligent d'énormes dégâts et se portent presque exclusivement à deux mains. Ils infligent toujours un malus de vitesse à leur porteur.
          <br />
          Héros compatibles : -- -- --
        </div>
        <MaterialTable
          columns={[
            { title: 'Nom', field: 'name' },
            { title: 'Icône', field: 'icon' },
            { title: 'Dégâts', field: 'damage', type: 'numeric' },
            { title: 'Grade', field: 'grade', lookup: { 1: 'Néophyte', 2: 'Avancé', 3: 'Décoré', 4: 'Remarquable', 5: 'Élite', 6: 'Perlescent', 7: 'Unique', 8: 'Signature', 9: 'Héroïque'} },
            { title: 'Coeff.', field: 'coeff', type: 'numeric' },
            { title: 'Élément', field: 'element', lookup: { 0: 'Aucun', 1: 'Feu', 2: 'Glace', 3: 'Électrique', 4: 'Psychique', 5: 'Poison', 6: 'Eau', 7: 'Ténèbres', 8: 'Lumière', 9: 'Féérique', 10: 'Cosmique'} },
            { title: 'Effets', field: 'effect' },
            { title: 'Port', field: 'port', lookup: { 1: 'Une main', 2: 'Deux mains'} },
          ]}
          data={[
              { name: 'Tecpatl', icon: 'boy', damage: 24, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 2 },
              { name: 'Espardent', icon: 'boy', damage: 23, grade: 2, coeff: 1.02, element: 1, effect: '-', port: 2 },
              { name: 'Brise-lame', icon: 'boy', damage: 25, grade: 3, coeff: 1.05, element: 0, effect: 'Ne diminue pas la Vitesse', port: 1 },
              { name: 'Leiomano', icon: 'boy', damage: 60, grade: 5, coeff: 1.15, element: 0, effect: '75% de chances de faire saigner la cible', port: 2 },
              { name: 'Espadon du mistral', icon: 'boy', damage: 23, grade: 3, coeff: 1.08, element: 3, effect: 'Augmente la Puiss.magique', port: 2 },
              { name: 'Macuahuitl', icon: 'boy', damage: 75, grade: 8, coeff: 1.25, element: 0, effect: '-', port: 2 },
              { name: 'Espadon d\'onyx', icon: 'boy', damage: 93, grade: 7, coeff: 1.33, element: 7, effect: '-', port: 2 },
              { name: 'Exécuteur', icon: 'boy', damage: 79, grade: 5, coeff: 1.15, element: 7, effect: '-', port: 2 },
              { name: 'Permafrost', icon: 'boy', damage: 77, grade: 5, coeff: 1.15, element: 2, effect: '-', port: 2 },
              ]}
          title="Liste des espadons"
        />
      </div>
      </div>
    )
  }
}

export default Greatsword;
