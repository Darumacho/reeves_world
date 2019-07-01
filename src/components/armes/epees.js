import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Sword extends Component {
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
        <MaterialTable
          columns={[
            { title: 'Nom', field: 'name' },
            { title: 'Icône', field: 'icon' },
            { title: 'Dégâts', field: 'damage', type: 'numeric' },
            { title: 'Grade', field: 'grade', lookup: { 1: 'Néophyte', 2: 'Avancé', 3: 'Décoré', 4: 'Remarquable', 5: 'Élite', 6: 'Perlescent', 7: 'Unique'} },
            { title: 'Coeff.', field: 'coeff', type: 'numeric' },
            { title: 'Élément', field: 'element', lookup: { 0: 'Aucun', 1: 'Feu', 2: 'Glace', 3: 'Électrique', 4: 'Psychique', 5: 'Poison', 6: 'Eau', 7: 'Ténèbres', 8: 'Lumière', 9: 'Féérique', 10: 'Cosmique'} },
            { title: 'Effets', field: 'effect' },
          ]}
          data={[
              { name: 'Protosabre', icon: 'boy', damage: 16, grade: 1, coeff: 1.02, element: 0, effect: 'Aucun' },
              { name: 'Katana', icon: 'boy', damage: 14, grade: 1, coeff: 1.02, element: 0, effect: 'Aucun' },
              { name: 'Fleuret magique', icon: 'boy', damage: 17, grade: 1, coeff: 1.02, element: 0, effect: 'Aucun' },
              { name: 'Fleuret du floret', icon: 'boy', damage: 19, grade: 2, coeff: 1.05, element: 0, effect: '+20% de chances de saignement' },
              { name: 'Égéthère', icon: 'boy', damage: 60, grade: 5, coeff: 1.25, element: 10, effect: '+250EG' },
              { name: 'Luminosabre écarlate', icon: 'boy', damage: 27, grade: 3, coeff: 1.08, element: 3, effect: '+10% de chances d\'électrocuter' },
              { name: 'Duo électrofantastique', icon: 'boy', damage: 24, grade: 4, coeff: 1.12, element: 3, effect: '+25% de chances d\'électrocuter | frappe deux fois' },
              { name: 'Blade on Fire', icon: 'boy', damage: 23, grade: 3, coeff: 1.08, element: 1, effect: '+10 de chances de brûler | + 50EG' },
              { name: 'Katanaffamé', icon: 'boy', damage: 41, grade: 4, coeff: 1.12, element: 0, effect: 'restaure de la santé à chaque tour' },
              ]}
          title="Test"
        />
      </div>
      </div>
    )
  }
}

export default Sword;
