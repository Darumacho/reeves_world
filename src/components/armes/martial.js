import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Martial extends Component {
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
        <div className="tabHeader">Un genre d'arme incroyablement varié, dédié aux plus patients et compétents des héros. C'est le type d'armement le plus riche qui soit.
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
              { name: 'Nunchaku', icon: 'boy', damage: 8, grade: 1, coeff: 1.02, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Battoir', icon: 'boy', damage: 9, grade: 1, coeff: 1.02, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Kendô', icon: 'boy', damage: 11 , grade: 3, coeff: 1.08, element: 0, effect: '-', port: 1 },
              { name: 'Hexadisque', icon: 'boy', damage: 18, grade: 3, coeff: 1.08, element: 0, effect: '-', port: 1 },
              { name: 'Ultracritique', icon: 'boy', damage: 20, grade: 4, coeff: 1.08, element: 0, effect: '-', port: 1 },
              { name: 'Lotus guidounien', icon: 'boy', damage: 52, grade: 8, coeff: 1.25, element: 10, effect: '-', port: 1 },
              { name: 'Transparence', icon: 'boy', damage: 18, grade: 5, coeff: 1.25, element: 8, effect: '-', port: 1 },
              ]}
          title="Liste des armes martiales"
        />
      </div>
      </div>
    )
  }
}

export default Martial;
