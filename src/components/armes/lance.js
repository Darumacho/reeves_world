import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Lance extends Component {
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
        <div className="tabHeader">Des armes destinées à percer les défenses ennemies ou à espacer la distance avec ces derniers. Les lances sont généralement destinées à des personnages à potentiel défensif.
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
              { name: 'Javelot', icon: 'boy', damage: 15, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Hallebarde', icon: 'boy', damage: 19, grade: 2, coeff: 1.02, element: 0, effect: '-', port: 1 },
              { name: 'Trident de mercure', icon: 'boy', damage: 23, grade: 3, coeff: 1.05, element: 0, effect: '-', port: 1 },
              { name: 'Lancéclair', icon: 'boy', damage: 59, grade: 5, coeff: 1.15, element: 4, effect: '-', port: 1 },
              { name: 'Gigaperceuse', icon: 'boy', damage: 62, grade: 5, coeff: 1.15, element: 0, effect: '-', port: 1 },
              ]}
          title="Liste des lances"
        />
      </div>
      </div>
    )
  }
}

export default Lance;
