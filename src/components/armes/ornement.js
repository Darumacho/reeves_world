import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Ornement extends Component {
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
        <div className="tabHeader">Un type d'arme très inhabituel spécifique à Sckald. Les ornements conservent les atouts défensifs du casque tout en lui ajoutant des propriétés offensives.
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
              { name: 'Cascocasque', icon: 'boy', damage: 17, grade: 1, coeff: 1.02, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Cascacorne', icon: 'boy', damage: 20, grade: 1, coeff: 1.02, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Cascobrut', icon: 'boy', damage: 15, grade: 2, coeff: 1.05, element: 0, effect: '15% de chances de paralyser la cible', port: 1 },
              { name: 'Buleaume', icon: 'boy', damage: 26, grade: 3, coeff: 1.08, element: 6, effect: '-', port: 1 },
              { name: 'Cascadès', icon: 'boy', damage: 42, grade: 4, coeff: 1.12, element: 7, effect: '-', port: 1 },
              { name: 'Boguérisse', icon: 'boy', damage: 48, grade: 4, coeff: 1.12, element: 0, effect: '-', port: 1 },
              { name: 'Cage à cerveau', icon: 'boy', damage: 75, grade: 5, coeff: 1.25, element: 8, effect: '-', port: 1 },
              ]}
          title="Liste des ornements de casque"
        />
      </div>
      </div>
    )
  }
}

export default Ornement;
