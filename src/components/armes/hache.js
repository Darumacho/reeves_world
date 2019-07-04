import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Axe extends Component {
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
        <div className="tabHeader">Les haches sont parmi les armes les plus versatiles du jeu, se rapprochant de la variété de possibilités offertes par les épées.
          <br />
          Héros compatibles : -- -- --
        </div>
        <MaterialTable
          columns={[
            { title: 'Nom', field: 'name' },
            { title: 'Icône', field: 'icon' },
            { title: 'Dégâts', field: 'damage', type: 'numeric' },
            { title: 'Grade', field: 'grade', lookup: { 1: 'Néophyte', 2: 'Avancé', 3: 'Décoré', 4: 'Remarquable', 5: 'Élite', 6: 'Perlescent', 7: 'Unique', 8: 'Signature'} },
            { title: 'Coeff.', field: 'coeff', type: 'numeric' },
            { title: 'Élément', field: 'element', lookup: { 0: 'Aucun', 1: 'Feu', 2: 'Glace', 3: 'Électrique', 4: 'Psychique', 5: 'Poison', 6: 'Eau', 7: 'Ténèbres', 8: 'Lumière', 9: 'Féérique', 10: 'Cosmique'} },
            { title: 'Effets', field: 'effect' },
            { title: 'Port', field: 'port', lookup: { 1: 'Une main', 2: 'Deux mains'} },
          ]}
          data={[
              { name: 'Hache de guerre', icon: 'boy', damage: 17, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Hache conflictuelle', icon: 'boy', damage: 19, grade: 2, coeff: 1.25, element: 0, effect: '-', port: 1 },
              { name: 'Élagueur cryophobique', icon: 'boy', damage: 45, grade: 4, coeff: 1.08, element: 2, effect: '-', port: 1 },
              { name: 'Hachoir affamé', icon: 'boy', damage: 31, grade: 3, coeff: 1.05, element: 0, effect: '-', port: 1 },
              { name: 'Pourfendeuse', icon: 'boy', damage: 29, grade: 3, coeff: 1.05, element: 0, effect: '-', port: 1 },
              { name: 'Décapiteur hiémal', icon: 'boy', damage: 70, grade: 8, coeff: 1.25, element: 5, effect: '-', port: 1 },
              { name: 'Bourreau carmin', icon: 'boy', damage: 53, grade: 5, coeff: 1.15, element: 0, effect: '-', port: 1 },
              ]}
          title="Liste des haches"
        />
      </div>
      </div>
    )
  }
}

export default Axe;
