import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Ceste extends Component {
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
        <div className="tabHeader">Des armes destinées à la mêlée pure. Les cestes utilisent toujours les deux mains de leur porteur et lui procure une mobilité supérieure à la moyenne.
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
              { name: 'Poing américain', icon: 'boy', damage: 8, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 2 },
              { name: 'Gants de boxe', icon: 'boy', damage: 7, grade: 2, coeff: 1.02, element: 0, effect: '-', port: 2 },
              { name: 'Flammoserre', icon: 'boy', damage: 13, grade: 3, coeff: 1.05, element: 1, effect: '-', port: 2 },
              { name: 'Vrillovrilles', icon: 'boy', damage: 12, grade: 3, coeff: 1.05, element: 1, effect: '-', port: 2 },
              { name: 'Griffes de Renfir', icon: 'boy', damage: 22, grade: 4, coeff: 1.08, element: 2, effect: '-', port: 2 },
              { name: 'Sol Invictus', icon: 'boy', damage: 40, grade: 5, coeff: 1.15, element: 8, effect: '-', port: 2 },
              ]}
          title="Liste des cestes"
        />
      </div>
      </div>
    )
  }
}

export default Ceste;
