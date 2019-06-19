import React, { Component } from "react";
import './Heros.css';

export class Heros extends Component {
    state = {
        name: 'Guidoune',
        power: 'le feu'
    };

    randomName = () => {
        const names = [
            'Guidoune',
            'Matante',
            'Câlisse',
            'Carcajou',
            'Caribou',
            'Poutine',
            'Molécule',
            'Gérard',
            'Boy',
            'Magma',
            'Fantastique',
            'Arcane',
            'Béton',
            'Congère',
            'Ampère',
            'Table',
            'Cheddar',
            'Arbre',
            'Art Contemporain',
            'Porte-manteau',
            'Caoutchouc',
            'Cure-dent',
            'Woman',
            'Fauteuil',
            'Magique',
            'Astro',
            'Dark',
            'Nerf',
            'Téléport',
            'Diplomatie',
        ];

        const powers = [
            'le feu',
            'la glace',
            'le coup de patoune',
            'l\'électricité',
            'le fromage',
            'l\'invisibilité dans le noir',
            'le béton',
            'la lave',
            'la compréhension de l\'art contemporain',
            'la téléportation à 1cm',
            'les tours de magie',
            'le caoutchouc',
            '...ben euh rien en fait',
            'la fabrication de munitions NERF',
            'les portes-manteaux',
            'le contrôle qualité des fauteuils',
            'les cartes Yu-Gi-Oh',
            'l\'alphabet à l\'envers',
            'les cure-dents',
            'les nids de poule',
            'les playlists Youtube',
            'les programmes TV',
            'la table périodique des éléments',
            'l\'acide chlorhydrique',
            'la vision diurne en pleine nuit',
            'les cris des enfants de tes voisins',
            'l\'Arc de Triomphe',
            'les pieds de table',
            'les aiguilles de conifères',
            'l\'art du DAB',
        ];

        const randomName = Math.floor(Math.random() * 30);
        const hero = names[randomName];

        const randomPower = Math.floor(Math.random() * 30);
        const power = powers[randomPower];

        this.setState({ 
            name: hero,
            power: power
        });
        };

    selectHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <div className="randomHero">
            <br />
            <br />
                <h2 font-color= 'white'>Deviens un super héros</h2>
                    <button onClick={this.randomName}>Générer un nom</button>
                    <br />
                    <br/>
                    Tu es
                <h3>{this.state.name} Man et tu maîtrises {this.state.power} !</h3>               
            </div>
        );
    }
}
export default Heros;

