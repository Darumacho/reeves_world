import React, { Component } from "react";
import './Heros.css';

import ShuffleText from 'react-shuffle-text';

export class Heros extends Component {
    state = {
        name: 'Guidoune',
        power: 'tu maîtrises le feu',
        enemyName: 'le docteur Doofenschmirtz',
        enemyPower: 'un professeur diabolique aussi fou que diplômé',

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
            'Beurre',
            'Pronostic',
            'Effluve',
            'Potassium',
            'Pectine',
            'Extincteur',
            'Caméléon',
            'Mystère',
            'Câble',
            'Beyblade',
            'Vitre',
            'Porte',
            'Trottinette',
            'Post-it',
            'Moquette',
            'Lumière',
            'Pachyderme',
            'Chemise',
            'Plastique',
            'Madagascar',
            'Cascade',
            'Sopalin',
            'Pétard',
            'Info',
            'Ça alors',
            'Infini',
            'Cholestérol',
            'Fusible',
            'Siphon',
            'Harmonie',
            'Rhinocéros',
            'Gangster',
            'Hirsute',
            'Escalator',
            'GPS',
            'Prévention',
            'Frigidaire',
            'Petit four',
            'Abricot',
            'Haltère',
            'Napalm',
            'Blizzard',
            'Zodiaque',
            'Papier-bulle',
            'Télécommande',
            'Baveux',
            'Fafouin',
            'Biologique',
            'Bombe',
            'Pizza',
            'Fondue',
            'Framboise',
            'Cuisine',
            'Néon',
            'Clarinette',
            'Guitare',
            'Vapeur',
            'Rocher',
            'Québec',
            'Cristaline',
            'Parpaing',
            'Tournevis',
            'Hibou',
            'Sol',
            'Fourchette',
            'Ventilateur',
            'Littérature',
            'Edge',
            'Gallinacé',
            'Nicolas',
        ];

        const powers = [
            'tu maîtrises le feu',
            'tu maîtrises la glace',
            'tu maîtrises le coup de patoune',
            'tu maîtrises l\'électricité',
            'tu maîtrises le fromage',
            'tu peux devenir invisible dans le noir',
            'tu maîtrises le béton',
            'tu maîtrises la lave',
            'tu peux comprendre l\'art contemporain',
            'tu peux te téléporter à 1cm de distance',
            'tu connais plein de tours de magie',
            'tu maîtrises le caoutchouc',
            'tu n\'as aucun pouvoir, mais au moins ton nom est cool',
            'tu peux ravitailler en munitions NERF',
            'tu contrôles les portes-manteaux',
            'tu maîtrises le contrôle qualité des fauteuils',
            'tu sais jouer aux cartes Yu-Gi-Oh',
            'tu peux roter l\'alphabet à l\'envers',
            'tu maîtrises les cure-dents',
            'tu maîtrises les nids de poule',
            'tu maîtrises les playlists Youtube',
            'tu maîtrises les programmes TV',
            'tu connais la table périodique des éléments',
            'tu peux boire de l\'acide chlorhydrique',
            'tu maîtrises la vision diurne en pleine nuit',
            'tu contrôles les cris des enfants de tes voisins',
            'tu peux tirer des flèches avec l\'Arc de Triomphe',
            'tu maîtrises les pieds de table',
            'tu maîtrises les aiguilles de conifères',
            'tu maîtrises l\'art du DAB',
            'tu peux changer le nom de n\'importe qui en "Gérard"',
            'tu peux survivre à une chute d\'exactement 500.26m',
            'tu es immunisé aux balles toutes les 4 balles reçues',
            'tes pieds sentent vraiment très fort',
            'tu as une cape',
            'tu connais toutes les chansons de Robert Charlebois',
            'tu peux attraper n\'importe quel papillon sans filet',
            'tu peux invoquer des cacahouètes',
            'tu suintes du beurre',
            'tu peux absorber les raisins',
            'tu peux tout transformer en banane',
            'tu peux te transformer en lampe',
            'tu peux changer le parfum de n\'importe quelle boisson en "fraise"',
            'tu vois tout en beige',
            'tu ne clignes jamais des yeux',
            'tu peux liker un commentaire deux fois',
            'tu peux arrêter le temps pendant 1 seconde toutes les 24 heures',
            'tu peux lire tes propres pensées',
            'tu maîtrises les tuyaux d\'arrosage',
            'tu peux t\'auto-détruire',
            'tu sais où est Ornicar',
            'tu sais imiter le cri du tapir',
            'tu peux faire apparaître des portes',
            'tu sais lacer n\'importe quelle chaussure',
            'tu peux prédire les résultats de chaque match 30 secondes avant leur fin',
            'tu peux pousser Mémé dans les orties',
            'tu connais la capitale du Swaziland',
            'tu peux transformer l\'or en argent',
            'tu peux faire du moonwalk sur la Lune',
            'tu communiques avec les pamplemousses',
            'tu peux devenir chauve à volonté',
            'tu peux faire des super slow-motions',
            'tu obtiens la super-force pendant une seconde toutes les 48 heures',
            'tu peux séduire n\'importe quel chapeau',
            'tu peux désaturer toutes les images',
            'tu peux réciter "Guerre et Paix" de Tolstoï par coeur',
            'tu peux détecter les ordures à 10 mètres',
            'tu peux arrêter les escalators',
            'tu es capable d\'énoncer l\'angle de n\'importe quel objet',
            'tu passes seulement 10 minutes dans un magasin IKEA',
            'tu peux éternuer avec les yeux ouverts',
            'tu sens la vanille',
            'tu peux vivre jusqu\'à ta mort',
            'tu peux respirer dans l\'espace',
            'tu peux faire rire les personnes âgées',
            'tu es super edgy',
            'tu peux lancer un boomerang sans qu\'il ne revienne',
            'tu peux te transformer en David Pujadas',
            'tu connais la température de Saint-Eustache-la-Forêt',
            'tu es immunisé aux pétards',
            'toutes tes phrases finissent par "Boy"',
            'tu ne peux pas marcher sur les LEGO',
            'tu peux faire danser la Tektonik à n\'importe qui',
            'tu ne rigoles qu\'aux blagues nulles',
            'tu sais qui est le président du Kirghizistan',
            'tu peux endormir n\'importe quel rhinocéros',
            'tu n\'as pas besoin de Google Maps',
            'tu disparais quand les gens clignent des yeux',
            'tu peux faire apparaître des moustaches',
            'tu ne peux boire que de la Salvetat',
            'tu connais les règles du cricket',
            'tu peux respirer en dehors de l\'eau',
            'tu fais apparaître des pâtes al dente dans chaque plat',
            'tu peux transformer les canards en pintades',
            'tu peux cracher du feu avec tes aisselles',
            'tu peux parler ouzbèke pendant 30 secondes toutes les 2 heures',
            'tu peux lire l\'avenir dans les méduses',
            'tu peux écrire à la craie sur les tableaux Veleda',
            'tu maîtrises toutes les figures de style',
            'tu maîtrises les toupies',
        ];

        const enemiesName = [
            'le docteur Doofenschmirtz',
            'le professeur Pigequedal',
            'le Caméléon',
            'le Capricorne',
            'François Fillon Man',
            'une congrégation de témoins de Jéhovah',
            'Frelon Man',
            'la Sorcière de la Mort',
            'Jean-Pierre Foucault',
            'le Chimiste',
            'le Pigeon Monarque',
            'le Torréfacteur',
            'Ventilator Master',
            'la classe de CP de l\'école Sainte-Geneviève',
            'Lego Man',
            'Seto Kaiba',
            'le mec qui détruit tout à la WiiMote',
            'Fortune Master',
            'le Manchot',
            'le docteur Tartopum',
            'le guichetier de la SNCF',
            'Slowalk Man',
            'Water Man',
            'le Hibou Grand-Duc septentrional',
            'le Capitaine Krabs',
            'Kev Adams',
            'un p***** de furry',
            'Florentin',
            'toi-même',
            'le Dabber fou',
            'l\'homme-flaque d\'eau',
            'le maître-nageur de la piscine de Bolbec',
            'un magnat du pétrole texan',
            'l\'homme au pied-de-biche du T2',
            'cette guidoune de Little Mac',
            'Razorback',
            'Pied-de-table Master',
            'le Gerboulateur',
            'le professeur Pudéyep',
            'Céline Dion',
            'le PDG de EA',
            'Nicolas Fouché',
            'Yaourt Man',
            'Cigarette Man',
            'un dealer de Vache qui rit',
            'l\'homme-Roquefort',
            'un fromager',
            'l\'homme-femme',
            'une famille en vacances',
            'ton ancien professeur de maths',
            'le professeur Oh Boy',
            'David Pujadas',
            'Magic Master',
            'Fortnite Man',
            'un héros de BD franco-belge des années 50',
            'Man Man',
            'le Saucissoneur',
            'une mouche',
            'Vincent Lefebvre',
            'la girafe des ténèbres',
            'la giga-perceuse',
            'un mec qui ne se lave pas les mains',
            'un groupe de cosplayers à la Japan Expo',
            'Escargotinator',
            'le Clarinettiste',
            'le mangeur de Pringles',
            'Tidus',
            'Harold',
            'Jean-Luc Mélenchon Man',
            'l\'homme-table',
            'le professeur Stephen Hawking',
            'un parent d\'élève',
            'la meuf de chez Nachos qui ne sait pas articuler',
            'un individu',
            'Pikachu',
            'l\'homme hipster parisien',
            'le tarif "sur place" de chez Paul',
            'un vieux monsieur chinois',
            'la taupe dans ton jardin',
            'le Nutella',
            'ce gamin insupportable qui hurle dans l\'avion',
            'Guidoune Man et ses blagues pourtant génialissimes',
            'la mauvaise haleine de ton chef',
            'la brosse à dents',
            'l\'hygiène corporelle des gens à la piscine',
            'un braconnier de feuilles de chêne',
            'Mark Zuckerberg',
            'un pêcheur qui sent le flétan',
            'un mec qui gare sa moto n\'importe comment',
            'un cultivateur d\'asperges',
            'l\'homme-amanite-tue-mouches',
            'un rugbyman nu',
            'l\'homme-pintade',
            'Vaisselle Master',
            'le Lanceur de lave-vaisselle',
            'Poire Master',
            'Negative Colissimo Man',
            'un cowboy trompettiste',
            'James de la Team Rocket',
        ];

        const enemiesPower = [
            'un professeur diabolique aussi fou que diplômé',
            'qui connait tous les multiples de 1',
            'qui fait des créneaux à la perfection',
            'qui ne se lave jamais les dents',
            'ses dabs font peur aux chiens',
            'qui peut se transformer en flaque d\'eau',
            'qui a toujours 30 minutes de retard',
            'un dangereux individu qui déteste Keanu Reeves',
            'qui ne mange que des poires',
            'qui joue de la clarinette en permanence',
            'qui fait apparaître des LEGO sous tes pieds',
            'qui terrorise le TEOR',
            'qui est un docteur belge',
            'ses parents ne lui ont pas appris la politesse',
            'qui joue à Fortnite',
            'ce monstre remplace toutes les céréales par des mini saucissons',
            'cette guidoune main Little Mac dans Smash Bros',
            'une espèce de matante qui met des DLCs partout',
            'qui fais en sortent que tous le monde fassent des faute d\'ortografe',
            'qui ne met jamais son nom sur ses bagages',
            'qui augmente le cholestérol',
            'son rire est insupportable',
            'qui contrôle une armée de mouettes',
            'qui donne en permanence envie d\'éternuer',
            'qui sifflote la même chanson en permanence',
            'qui fait disparaître tous les rouleaux de papier-toilette',
            'qui fait parler tout le monde en allemand',
            'qui fait disparaître toutes les chaussettes',
            'dont les genoux provoquent des conjonctivites',
            'qui récite le Tartuffe de Molière en boucle',
            'qui a un très mauvais jeu d\'acteur',
            'qui peut te transformer en kikoojap',
            'qui ne mange que des produits bio à 200 balles',
            'qui rend les gens fous avec son histoire de TAE',
            'qui provoque des diarhées explosives tous les mardis',
            'son funeste animal de compagnie est un escargot très agressif',
            'cette crapule s\'exhibe devant les maisons de retraite',
            'une ordure qui écrit "commeme" au lieu de "quand même"',
            'un redoutable adversaire refusant toujours la priorité à droite',
            'qui met toujours la climatisation en hiver',
            'ce malfrat spoile tous les films que tu as en tête',
            'qui possède des paluches énormes et velues',
            'cette ordure dirige un hôpital qui se fout de la charité',
            'qui place la goutte d\'eau qui fait déborder le vase',
            'qui inverse la moutarde et le ketchup',
            'dont les ongles de pieds mesurent 45 centimètres',
            'qui bascule sur une chaîne météo néerlandaise lors du moment le plus important de chaque film',
            'cette crapule perturbe le trafic en mettant des feux rouges trop longs',
            'qui fait disparaître toutes les ultra-rares des boosters Yu-Gi-Oh',
            'qui conduit une Tweezy, parfaite pour assassiner en silence',
            'cette espèce de fumier ne dit jamais "Merci" aux serveurs',
            'une sorte de traître qui favorise les exclusivités Epic Games Store',
            'qui trouve que les blagues Carambar sont hilarantes',
            'un inconditionnel du chaos qui déteste le kebab',
            'dont les chaussures brillent beaucoup trop',
            'qui ne laisse jamais la place aux personnes âgées dans les bus',
            'cette ordure achète tous les produits Apple existants',
            'cette erreur de la société met le lait avant les céréales',
            'cette espèce de fumier met la charrue avant les boeufs',
            'un terrible opposant à la république du Québec, avec ses projets anti-poutine',
            'membre du crew d\'Augustin Monville',
            'un terrible adversaire qui fait en sorte que tu te cognes toujours le petit orteil au réveil',
            'qui défait toujours tes lacets au moment où tu t\'y attends le moins',
            'une abomination qui répond toujours "Feur" quand on lui dit "Quoi"',
            'un fléau universel qui possède toujours un +4 au Uno',
            'qui fait apparaître des épis sur chacune des têtes croisées',
            'cette saleté pense que la Terre est plate',
            'un adversaire coriace qui ne dit jamais "Oui", ni "Non"',
            'une force de la nature immunisée aux lancers de tortue',
            'qui place des tranches d\'ananas sur chaque tranche de pizza',
            'c\'est un furry',
            'un destructeur-né sans aucun scrupule ni brosse à dents',
            'cette immondice trempe son Roquefort dans du sirop de menthe',
            'cette ordure se place toujours au mileu des escalators',
            'fanatique n\'hésitanta pas à sacrifier au nom du Coco de Paimpol',
        ];

        const randomName = Math.floor(Math.random() * 100);
        const hero = names[randomName];

        const randomPower = Math.floor(Math.random() * 100);
        const power = powers[randomPower];

        const randomEnemyName = Math.floor(Math.random() * 100);
        const enemyName = enemiesName[randomEnemyName];

        const randomEnemyPower = Math.floor(Math.random() * 75);
        const enemyPower = enemiesPower[randomEnemyPower];

        console.log(`name: ${randomName} power: ${randomPower} enemy: ${randomEnemyName} enemyPower: ${randomEnemyPower}`)

        this.setState({
            name: hero,
            power: power,
            enemyName: enemyName,
            enemyPower: enemyPower
        });
        };

    selectHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <React.Fragment>
            <div className="randomHero">
            <br />
            <br />
                <h2 font-color= 'white'>Deviens un super héros</h2>
                    <button onClick={this.randomName}>Générer une vie de super-héros</button>
                    <br />
                    <br/>
                    Tu es
                <h3>{this.state.name} Man et {this.state.power} !</h3>               
            </div>
            <div className="randomHero">
                <br/>
                Ton pire ennemi est...
                <h4>{this.state.enemyName}, {this.state.enemyPower} !</h4>   
                <br />          
            </div>
            </React.Fragment>
            
        );
    }
}
export default Heros;

/*<ShuffleText charFrameTime= {5} charFrames= {3} charIncInterval= {20} content ={this.state.name} />
<ShuffleText charFrameTime= {5} charFrames= {3} charIncInterval= {20} content =" Man et " />
<ShuffleText charFrameTime= {5} charFrames= {3} charIncInterval= {20} content = {this.state.power} /> 
<ShuffleText charFrameTime= {5} charFrames= {3} charIncInterval= {20} content = "!"/>*/