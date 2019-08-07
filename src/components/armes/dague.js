import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Dague extends Component {
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
      </nav>
      <div className="tabContainer">
        <div className="tabHeader">Des armes de précision peu puissantes, reposant sur leurs effets pour offrir de nombreuses possibilités à leur porteur. Elles offrent d'importants bonus de mobilité.
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
              { name: 'Poignard', icon: 'boy', damage: 11, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Aiguille empoisonnée', icon: 'boy', damage: 1, grade: 2, coeff: 1, element: 0, effect: '1% de chances de tuer en un seul coup', port: 1 },
              { name: 'Dépeceur', icon: 'boy', damage: 15, grade: 2, coeff: 1.02, element: 1, effect: '-', port: 1 },
              { name: 'Daglagla', icon: 'boy', damage: 26, grade: 4, coeff: 1.08, element: 2, effect: '-', port: 1 },
              { name: 'Fulgurodard', icon: 'boy', damage: 62, grade: 6, coeff: 1.33, element: 10, effect: '-', port: 1 },
              { name: 'Nymphectieuse', icon: 'boy', damage: 51, grade: 5, coeff: 1.15, element: 9, effect: '-', port: 1 },
              { name: 'Dague nostique', icon: 'boy', damage: 43, grade: 5, coeff: 1.15, element: 7, effect: '-', port: 1 },
              ]}
          title="Liste des dagues"
        />
      </div>
      </div>
    )
  }
}

export default Dague;
