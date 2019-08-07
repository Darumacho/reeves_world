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
        <div className="tabHeader">Armes de choix pour la plupart des classes légères, les épées sont les armes les plus versatiles du jeu, disposant d'un grand nombre de modèles et d'effets.
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
              { name: 'Protosabre', icon: 'boy', damage: 16, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Katana', icon: 'boy', damage: 14, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Fleuret magique', icon: 'boy', damage: 17, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Fleuret du floret', icon: 'boy', damage: 19, grade: 2, coeff: 1.02, element: 0, effect: '+20% de chances de saignement', port: 1 },
              { name: 'Égéthère', icon: 'boy', damage: 60, grade: 5, coeff: 1.15, element: 10, effect: '+250EG', port: 1 },
              { name: 'Luminosabre écarlate', icon: 'boy', damage: 27, grade: 3, coeff: 1.05, element: 3, effect: '+10% de chances d\'électrocuter', port: 1 },
              { name: 'Duo électrofantastique', icon: 'boy', damage: 24, grade: 4, coeff: 1.08, element: 3, effect: '+25% de chances d\'électrocuter | frappe deux fois', port: 2 },
              { name: 'Blade on Fire', icon: 'boy', damage: 23, grade: 3, coeff: 1.05, element: 1, effect: '+10 de chances de brûler | + 50EG', port: 1 },
              { name: 'Katanaffamé', icon: 'boy', damage: 41, grade: 4, coeff: 1.08, element: 0, effect: 'restaure de la santé à chaque tour', port: 1 },
              { name: 'Fleuret magistral', icon: 'boy', damage: 48, grade: 7, coeff: 1.25, element: 0, effect: '20% de chances d\'éblouir la cible', port: 1 },
              { name: 'Épée longue', icon: 'boy', damage: 16, grade: 1, coeff: 1, element: 0, effect: 'Aucun', port: 1 },
              { name: 'Céphalopodestructeur', icon: 'boy', damage: 75, grade: 6, coeff: 1.33, element: 6, effect: '-', port: 1 },
              { name: 'Lame du feu guidounien', icon: 'boy', damage: 72, grade: 6, coeff: 1.33, element: 1, effect: '-', port: 1 },
              { name: 'Lames d\'ambivalence', icon: 'boy', damage: 38, grade: 8, coeff: 1.25, element: 3, effect: '-', port: 2 },
              { name: 'Lames primordiale', icon: 'boy', damage: 75, grade: 7, coeff: 1.25, element: 4, effect: '-', port: 1 },
              { name: 'Lame effilochée', icon: 'boy', damage: 38, grade: 5, coeff: 1.18, element: 7, effect: '-', port: 1},
              ]}
          title="Liste des épées"
        />
      </div>
      </div>
    )
  }
}

export default Sword;
