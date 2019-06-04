import React from 'react';

export class Armes extends React.Component {
  render() {
      return (
        <div> 
          <div class="grid-row">
            <div class="grid-col span-md-9 span-lg-10">
              <div class="resp-scroll">
              <table class="data-table block-wide">
              <thead>
              <tr>
              <th><div class="sortwrap">Name</div></th> <th class="sorting" data-sort="string"><div class="sortwrap">Category</div></th> <th><div class="sortwrap">Effect</div></th> </tr>
              </thead>
              <tbody>
              <tr>
              <td class="cell-fixed" data-sort-value="Ability Capsule">
              <span class="img-fixed icon-item-img" data-src="https://img.pokemondb.net/sprites/items/ability-capsule.png" data-alt="Ability Capsule icon"></span> <a class="ent-name" href="/item/ability-capsule">Ability Capsule</a>
              </td>
              <td class="cell-fixed" data-sort-val="hold">Hold items</td>
              <td class="cell-long-text">A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.</td>
              </tr>
              <tr>
              <td class="cell-fixed" data-sort-value="Ability Urge">
              <span class="img-fixed icon-item-img" data-src="https://img.pokemondb.net/sprites/items/ability-urge.png" data-alt="Ability Urge icon"></span> <a class="ent-name" href="/item/ability-urge">Ability Urge</a>
              </td>
              <td class="cell-fixed" data-sort-val="battle">Battle items</td>
              <td class="cell-long-text">When used, it activates the Ability of an ally Pokémon.</td>
              </tr>
              </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Armes;