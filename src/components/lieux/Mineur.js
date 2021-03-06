import React from 'react';

export class Mineur extends React.Component {
  render() {
      return (
        <div className="journalContainer">
        <div className="journal">
        <React.Fragment>     
<div class="blog-header">
      <div class="container">
        <h1 class="blog-title">Lieux</h1>
      </div>
    </div>
    </React.Fragment>
  <React.Fragment>
    <div class="container">
      <div >
        <div class="blog-main">
        <nav class="blog-pagination">
        <a class="btn btn-outline-primary" href="/lieux">Lieux importants</a>
          <a class="btn btn-outline-primary" href="/contree">Contrées</a>
          <a class="btn btn-outline-primary" href="/mineur">Lieux mineurs</a>
        </nav>
          <div class="blog-post">
              <h2 class="blog-post-title" id="chosen">Lieux mineurs</h2>
              <br />
              <div class="miniContainer">
              <h3 className="subtitle">Tour de Combat</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Agence de Mercenariat, Guidounière, Arène</p>
              <p>La Tour de Combat a été érigée par le célèbre Michel Bay, richissime aventurier grand amateur d'action et de déflagrations. Elle consiste en une série de paliers comprenant des séries de 7 à 12 combats consécutifs, chacun d'eux récompensant les candidats avec des lots de grande valeur. Un mode extrême appelé "Mode Fafouin" propose une série de 50 combats consécutifs remmpli de restrictions.</p>
              <p>La construction de cette tour a suscité de vives réactions lors des premiers jours, mais est finalement devenue une attraction mondiale au fil des années. D'autres organisateurs ont par la suite lancé leurs propres variantes.</p>
              <br />

              <h3 className="subtitle">Pyramide de Combat</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Agence de Mercenariat, Labyrinthe</p>
              <p>La Pyramide de Combat est un cerceuil antique restauré par le célèbre Sylvestre Talon, afin de concurrencer la Tour de Combat de Michel Bay. La Pyramide consiste en une série de 7 dédales consécutifs, dont la sortie est aléatoirement replacée. Le participant ne dispose d'aucun objet de soin et devra se sustenter du contenu des différents coffres qu'il trouvera tout au long de son parcours.</p>
              <p>Le ré-aménagement de la pyramide a été quelque peu critiqué, à l'instar de la tour, mais s'avère bénéfique pour le tourisme régional.</p>
              <br />

              <h3 className="subtitle">Ruines de Lanfair</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Aucun</p>
              <p>Les piteux restes de l'ancien royaume de Lanfair, autrefois prospère, avant qu'il ne soit englouti et corrompu par une force inconnue. C'était le plus grand territoire du monde avant le fameux évènement mystérieux. Les rescapés se sont réfugiés à l'est de la seule oasis encore potable, afin de fonder l'actuel Saramenbourg.</p>
              <p>Le seul habitant des ruines est un géant nommé Genoer, apparemment issu d'un autre Univers, chargé de garder une force inquiétante.</p>
              <br />

              <h3 className="subtitle">Bois de Loubogne</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Village caché</p>
              <p>La forêt en périphérie de Nouillorc. C'est un havre de paix où faune et flore prospèrent. On peut y discerner quelques petites habitations de fortune, ainsi qu'un "village" de seulement deux habitants rivaux depuis toujours. L'entrée semblait avoir été cachée par les Jhâvas.</p>
              <br />

              <h3 className="subtitle">Avant-poste de Nouillorc</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Atelier, Agence de mercenariat, Armes, Armures, Jeve Stobs, Nourriture</p>
              <p>Le quartier général de la garde de la Contrée Principale, les fameux soldats en armure noire et rouge. C'est ici qu'ils forgent leur équipement, boivent, dorment, et jouent aux cartes. Les gardes sont souvent alternées, les soldats étant fréquemment mutés dans d'autres villes ou contrées. Des instructeurs sont présents pour distribuer des manuels à tous les novices en fabrication d'armement.</p>
              <p>En ces temps de Corruption++, la garde nouillorcaise est particulièrement mobilisée, mais agit rarement contre les forces Jhâvas, laissant la tâche aux Chosen Ones, plus aptes à contenir les pouvoirs potentiellement destructeurs des Jhâvas.</p>
              <br />

              <h3 className="subtitle">Nowel City</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Grand magasin de Nowel, boutique de caisses surnaturelles</p>
              <p>Une petite île proche du royaume du Nord, très touristique pendant les fins d'année. Les Chosen Ones débarrassent la ville d'un terrible monstre semant la terreur, empêchant les touristes (et donc la sweet sweet money) d'entrer. Ils y rencontrent d'ailleurs plusieurs têtes familières.</p>
              <p>On y trouve beaucoup de spécialités locales, faisant le bonheur des visiteurs et la fierté des commerçants.</p>
              <br />

              <h3 className="subtitle">Joliberges</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Capsulerie</p>
              <p>Un petit village côtier en périphérie du port Duavre, très pauvre et en permanance empreint d'une odeur de poisson pourri. C'est ici que vit Kiuti, le gardien du framework C++.</p>
              <p>C'est ici que le mystérieux Giegue est tombé des cieux il y'a des dizaines d'années.</p>
              <br />

              <h3 className="subtitle">Route du Grand Chemin</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Atelier, Gouffre obscur millénaire, maison de la famille Gidéon, salon Laxa'Tif</p>
              <p>La très longue route principale reliant le port Duavre à la CCI. Elle est nommée ainsi à cause des nombreux embranchements s'ouvrant aux voyageurs. C'est l'une des routes les plus empruntées de la Contrée Principale, cependant coupée en deux par la forêt de Cierthelieux.</p>
              <br />

              <h3 className="subtitle">Mont Letzroc</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Atelier, nombreux filons rocheux, maison d'Élastoc, Marché noir, Nourriture</p>
              <p>Un vaste massif montagneux incroyablement riche en métaux en tous genres. C'est d'ici que les Chosen Ones accèdent au temple de Corzéam. On y trouve d'ailleurs la maison du seul habitant du massif, un expert en roches nommé Élastoc qui confère une pioche aux Chosen Ones.</p>
              <p>Les bruits courent qu'un marche noir est caché au sein de la montagne, dont l'accès extrêmement restreint requiert un paimement d'entrée.</p>
              <br />

              <h3 className="subtitle">Entrelasque</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Guidounière, Armes, Sanctuaire du Void</p>
              <p>Une ville riche en histoire, témoin d'un évènement très important de la création de l'Univers. C'est autour de cette empreinte sacrée qu'a été construit le Sanctuaire du Void ainsi que le reste de la ville</p>
              <p>Au vu de l'importance historique de la ville, il semble étrange que les Jhâvas n'aient pas investi les lieux.</p>
              <br />

              <h3 className="subtitle">Roc-en-Nombre</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Maison du Pêcheur</p>
              <p>Un archipel rocheux au sud d'Entrelasque. Il abrite le mécanisme de sûreté du Sanctuaire du Void, difficilement accessible pour le commun des mortels. Un pêcheur local parle d'un mystérieux galion capable d'emmener les voyageurs vers une île supposément imaginaire.</p>
              <br />

              <h3 className="subtitle">Cierthelieux</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Manoir Ducryme, Nourriture, Armurerie d'Épée rouillée</p>
              <p>Le village secret de la forêt portant le même nom. Ses habitants sont désignés par leur métier ou statut. On raconte que tous les jours, un crime se produit au sein du village, avant que la vie ne reprenne son cours habituel.</p>
              <br />

              <h3 className="subtitle">Vimontilliers</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Atelier, Chez FrancescAAAAAARGH, Boutique-surprise</p>
              <p></p>
              <p>Un petit village en périphérie de la CCI, étape de la Route du Grand Chemin. Un restaurant aux plats très onéreux y a ouvert, faisant la fortune de ses gérants.</p>
              <br />

              <h3 className="subtitle">Sainte-Moustache-le-Bosquet</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Armes, Armures, École Saint-Sévère</p>
              <p>Un petit village incroyablement paisible, élu village le plus heureux du monde. C'ets ici qu'on trouve le célèbre établissement Saint-Sévère, réputé pour le recadrement des élèves difficiles ainsi que ses classes d'été faisant le bonheur de tous les écoliers.</p>
              <br />

              <h3 className="subtitle">Dôme de Combat</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Armes, Armures, Guidounière, Arène, Restaurant</p>
              <p>Le Dôme de Combat est un gigantesque complexe construit par Quentin Tarentule, afin de concurrencer la Tour de Combat de Michel Bay. Ce haut-lieu sportif est dédié aux duels, dont les participants arrivent du monde entier.</p>
              <p>C'est le seul établissement proposant une monnaie parallèle ainsi qu'un classement.</p>
              <br />

              <h3 className="subtitle">Passage funeste</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Guidounière, Agence de mercenariat, Agence de Duracuir, Raid</p>
              <p><u>Gardiens :</u> Khon Fethi l'Invincible, Légion des Jhâvannihhilateurs, Ellison</p>
              <p>L'une des mystérieuses Îles lointaines. On y trouvait une cité apparemment florissante, avant que l'île entière ne soit déchirée par une gigantesque faille. Les derniers habitants de l'île ont pris soin d'enterrer leurs défunts, apportant son nom au nouveau domaine.</p>
              <p>Le Passage funeste est une haut lieu de la conquête Jhâva, renfermant les forces d'élite millénaires chargées de donner le coup de grâce aux forces divines.</p>
              <br />

              <h3 className="subtitle">Voie lugubre</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Guidounière, Agence de mercenariat, Agence de Duracuir, Raid</p>
              <p><u>Gardiens :</u> Gardien lugubre, Géladal, Chevalier d'Arquéhedgie, Donald</p>
              <p>L'une des mystérieuses Îles lointaines. C'est une grande forêt imbue d'une puissante force maléfique ayant corrompu faune et flore. La souillure démoniaque est si puissante que des portails se sont ouverts depuis les Profondeurs, laissant s'échapper de véritables abominations.</p>
              <p>On raconte qu'une entité aussi vieille que les dieux y résiderait, régissant toute la matanterie de ce monde.</p>
              <br />

              <h3 className="subtitle">Canyon nocif</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Guidounière, Agence de mercenariat, Agence de Duracuir, Raid</p>
              <p><u>Gardiens :</u> Ninjarc-en-ciel, Melon Usk</p>
              <p>L'une des mystérieuses Îles lointaines. Un canyon stérile d'où émane une atmosphère malsaine réduisant grandement les perceptions de ceux qui s'y aventurent. La chaleur intense et les vaperolles toxiques, couplées à un complexe rocheux tentaculaire rendent la traversée particuluièrement éprouvante, même pour les plus aguerris.</p>
              <p>On raconte qu'un ingénieur fou aurait colonisé les lieux, avant de tomber sur des gisements de gaz mortels.</p>
              <br />

              <h3 className="subtitle">Chemin désastreux</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Guidounière, Agence de mercenariat, Agence de Duracuir, Raid</p>
              <p>Le quartier général de la garde de la Contrée Principale, les fameux soldats en armure noire et rouge. C'est ici qu'ils forgent leur équipement, boivent, dorment, et jouent aux cartes. Les gardes sont souvent alternées, les soldats étant fréquemment mutés dans d'autres villes ou contrées. Des instructeurs sont présents pour distribuer des manuels à tous les novices en fabrication d'armement.</p>
              <p>En ces temps de Corruption++, la garde nouillorcaise est particulièrement mobilisée, mais agit rarement contre les forces Jhâvas, laissant la tâche aux Chosen Ones, plus aptes à contenir les pouvoirs potentiellement destructeurs des Jhâvas.</p>
              <br />

              <h3 className="subtitle">Portail intergalactique</h3>
              <p><u>Commerce(s) / Centre(s) d'intérêt :</u> Guidounière, Agence de mercenariat, Agence de Duracuir, Raid</p>
              <p><u>Gardiens :</u> Ninjarc-en-ciel, Melon Usk</p>
              <p>L'une des mystérieuses Îles lointaines. Ce portail mystérieux est imbu d'une énergie cosmique transportant les voyageurs vers une contrée extrêmement lointaine. Ce carrefour hostile semble mener vers des plans guidouniens supérieurs.</p>
              <p>En ces temps de Corruption++, la garde nouillorcaise est particulièrement mobilisée, mais agit rarement contre les forces Jhâvas, laissant la tâche aux Chosen Ones, plus aptes à contenir les pouvoirs potentiellement destructeurs des Jhâvas.</p>
              <br />

        </div>
        <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#top">Haut de page</a>
          </nav>
        </div>
      </div>
    </div>
    </div>
  </React.Fragment>
      </div>
      </div>
      );
  }
}

export default Mineur;