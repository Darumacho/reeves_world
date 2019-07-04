import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class Hammer extends Component {
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
        <div className="tabHeader">Armes réservées aux héros les plus endurants, les marteaux sont le symbole de la force brute. Ils sont souvent accompagnés d'effets dévastateurs
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
              { name: 'Massud\'bois', icon: 'boy', damage: 19, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Concasseur délicieux', icon: 'boy', damage: 23, grade: 2, coeff: 1.02, element: 0, effect: '-', port: 1 },
              { name: 'Attendrisseur', icon: 'boy', damage: 21, grade: 3, coeff: 1.05, element: 0, effect: 'Diminue la Défense de la cible à chaque coup', port: 1 },
              { name: 'Clé Amolèthe', icon: 'boy', damage: 51, grade: 3, coeff: 1.15, element: 0, effect: 'Diminue drastiquement la Vitesse', port: 2 },
              { name: 'Gourdingue', icon: 'boy', damage: 23, grade: 3, coeff: 1.05, element: 5, effect: 'Peut empoisonner la cible à chaque coup', port: 1 },
              { name: 'Masse cacaclysmique', icon: 'boy', damage: 78, grade: 8, coeff: 1.25, element: 5, effect: '-', port: 2 },
              { name: 'Martocculte', icon: 'boy', damage: 53, grade: 4, coeff: 1.08, element: 4, effect: '-', port: 1 },
              ]}
          title="Liste des marteaux"
        />
      </div>
      </div>
    )
  }
}

export default Hammer;
