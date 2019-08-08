import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Omni extends Component {
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
        <div className="tabHeader">Comme leur nom l'indique, les armes Omniclasse peuvent être utilisées par n'importe quel héros. Elles disposent de propriétés et de formes incroyablement diverses et uniques. Elles ne ressemblent à aucun autre type d'arme.
          <br />
          Héros compatibles : tous
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
              { name: 'Essence de Gloire', icon: 'boy', damage: 45, grade: 7, coeff: 1.15, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Punch grondant', icon: 'boy', damage: 35, grade: 7, coeff: 1.15, element: 0, effect: '-', port: 1 },
              { name: 'Fléau septentrional', icon: 'boy', damage: 40, grade: 7, coeff: 1.15, element: 0, effect: '-', port: 1 },
              { name: 'Technobuster', icon: 'boy', damage: 60, grade: 9, coeff: 1.2, element: 0, effect: '10% de chances d\'infliger n\'importe quel statut', port: 1 },
              { name: 'Lame maudite', icon: 'boy', damage: 40, grade: 7, coeff: 1.15, element: 0, effect: '-', port: 1 },
              { name: 'Patoune maudite', icon: 'boy', damage: 40, grade: 7, coeff: 1.15, element: 0, effect: '-', port: 2 },
              ]}
          title="Liste des armes Omniclasse"
        />
      </div>
      </div>
    )
  }
}

export default Omni;
