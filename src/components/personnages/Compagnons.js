import React from 'react';

export class Compagnon extends React.Component {
  render() {
      return (
        <div className="journalContainer">
        <div className="journal">
        <React.Fragment>     
<div class="blog-header">
      <div class="container">
        <h1 class="blog-title">Personnages</h1>
      </div>
    </div>
    </React.Fragment>
  <React.Fragment>
    <div class="container">
      <div >
        <div class="blog-main">
        <nav class="blog-pagination">
        <a class="btn btn-outline-primary" href="/persos">Les Chosen Ones</a>
          <a class="btn btn-outline-primary" href="/divin">Les Divinités</a>
          <a class="btn btn-outline-primary" href="/ami">Les amis</a>
          <a class="btn btn-outline-primary" href="/mechant">Les méchants</a>
          <a class="btn btn-outline-primary" href="/compagnon">Les compagnons</a>
        </nav>
          <div class="blog-post">
              <h2 class="blog-post-title" id="chosen">Les compagnons</h2>
              <br />
              <div class="miniContainer">
              <h3 className="subtitle">Routoufmuche</h3>
              <p><u>Origine :</u> inconnue</p>
              <p><u>Rôle :</u> Polyvalent</p>
              <p><u>Recrutement :</u> libérer le port Duavre</p>
              <p>Euh...à vrai dire on ne sait pas grand-chose sur Routoufmuche. Il est juste présent. C'est tout.</p>
              <p>...</p>
              <p>Voilà.</p>
              <br />

              <h3 className="subtitle">Hubert</h3>
              <p><u>Origine :</u> Motopolis</p>
              <p><u>Rôle :</u> Magie et Soutien</p>
              <p><u>Recrutement :</u> vaincre Eklips et Nehtbinz à Entrelasque</p>
              <p>Ce bon vieux Hubert revient pour prêter main forte aux Chosen Ones, utilisant son grand âge et sa science pour faciliter la vie de ses équipiers, et déteriorer celle de leurs ennemis.</p>
              <p>En bon astrophysicien qui se respecte, Hubert maîtrise l'énergie cosmique, élément efficace contre la majorité des personnages.</p>
              <p>Conseillé pour les formations manquant de soutien ou de dégâts magiques.</p>
              <br />

              <h3 className="subtitle">Bagin</h3>
              <p><u>Origine :</u> Port Duavre</p>
              <p><u>Rôle :</u> Orchidoclaste</p>
              <p><u>Recrutement :</u> terminer sa quête à la CCI</p>
              <p>On vous laisse la surprise.</p>
              <br />

              <h3 className="subtitle">Matante Man</h3>
              <p><u>Origine :</u> Chopejambon Ville</p>
              <p><u>Rôle :</u> Attaque</p>
              <p><u>Recrutement :</u> aider le Chosen One Nico à Chopejambon Ville</p>
              <p>Matante Man revient en force avec ses super-pouvoirs afin de distribuer des marrons vertueux à tous les méchants qui se dressent sur votre chemin..</p>
              <p>Il ne maîtrise aucun élément, mais compte sur son âme de héros pour porter des coups fulgurants à ses adversaires.</p>
              <p>Conseillé pour les formations manquant de dégâts.</p>
              <br />

              <h3 className="subtitle">Câlisse Boy</h3>
              <p><u>Origine :</u> Chopejambon Ville</p>
              <p><u>Rôle :</u> Soutien</p>
              <p><u>Recrutement :</u> aider le Chosen One Nico à Chopejambon Ville</p>
              <p>Câlisse Boy est de retour, toujours en compagnie de Matante Man, il est toujours l'aussi bon acolyte qu'on connaît, faisant profiter toute l'équipe d'amélioration de stats.</p>
              <p>Comme tout bon sidekick qui se respecte, Câlisse Boy dispose de tout un arsenal pour améliorer la progression de ces équipiers.</p>
              <p>Conseillé pour les formations manquant de boost de stats.</p>
              <br />

              <h3 className="subtitle">Caribou fétide</h3>
              <p><u>Origine :</u> Village Akrid</p>
              <p><u>Rôle :</u> Défense</p>
              <p><u>Recrutement :</u> terminer sa quête au village Akrid</p>
              <p>Caribou fétide est le chef gigantesque et odorant du village Akrid. Il tient son nom du premier animal qu'il a chassé en étant enfant, et porte sa carcasse depuis toujours. Son hygiène inhabituelle et sa carrure de colosse en font un tank très robuste pouvant grignoter à petit feu la santé des ennemis.</p>
              <p>De par son fumet agréable; on peut rapidement deviner que Caribou fétide préfère l'élément Poison.</p>
              <p>Conseillé pour les formations manquant de tank, ou peu efficaces contre les ennemis résistants aux statuts.</p>
              <br />

              <h3 className="subtitle">Jean-Paul</h3>
              <p><u>Origine :</u> inconnue</p>
              <p><u>Rôle :</u> Polyvalent</p>
              <p><u>Recrutement :</u> agence de Duracuir sur les Îles Lointaines</p>
              <p>jean-Paul a décidé d'arrondir ses fins de mois en s'inscrivant à l'agence de Duracuir en tant que mercenaire de raid. Toutes ses compétences et talents sont nommés "Oh boy", mais possèdent des effets très variés, en faisant un très bon pilier multifonction.</p>
              <p>Comme tout personnage étrange digne de ce nom, Jean-Paul est passé maître de l'élément Psychique.</p>
              <p>Conseillé pour toute formation.</p>
              <br />
              
              <h3 className="subtitle">Chef Nabab</h3>
              <p><u>Origine :</u> Nouillorc</p>
              <p><u>Rôle :</u> Soins</p>
              <p><u>Recrutement :</u> agence de Duracuir sur les Îles Lointaines</p>
              <p>Le chef Nabab est un ancien collègue du chef Atouille et du chef Echtebez, chacun ayant continué dans sa propre voie. Il a mis au point une restauration rapide et copieuse dont lui seul a le secret, qu'il distribue afin de requinquer tous ses coéquipiers.</p>
              <p>En complément de ses sorts de soin, chef Nabab est en mesure d'infliger des dégâts élevés s'il possède le type d'arme adéquat.</p>
              <p>Conseillé pour les formations manquant de soins.</p>
              <br />

              <h3 className="subtitle">E.Gwiazdowski</h3>
              <p><u>Origine :</u> Sacramenbourg</p>
              <p><u>Rôle :</u> Soutien</p>
              <p><u>Recrutement :</u> agence de Duracuir sur les Îles Lointaines</p>
              <p>La maire de Sacramenbourg a décidé de s'octroyer quelques jours de congé afin de revenir casser de la guidoune de Jhâva. Grâce à ses connaissances dans le domaine juridique, elle est en mesure de grandement troubler les formations ennemies.</p>
              <p>Elle est le seul personnage à ne disposer d'aucune compétence offensive directe.</p>
              <p>Conseillée pour n'importe quelle formation.</p>
              <br />

              <h3 className="subtitle">Chef Jibé</h3>
              <p><u>Origine :</u> inconnue</p>
              <p><u>Rôle :</u> Attaque et Soutien</p>
              <p><u>Recrutement :</u> agence de Duracuir sur les Îles Lointaines</p>
              <p>Lorsqu'il n'est pas derrière les fourneaux, ni en train de parcourir le monde, chef Jibé livre ses services de BG. Son prestige légendaire l'amènent à avoir des compétences avec des noms classes, mais aussi de puissants effets de zone.</p>
              <p>Son sourire éclatant ainsi que ses lunettes de soleil nous laissent deviner qu'il est très à l'aise avec la Lumière.</p>
              <p>Conseillé pour les formations manquant de soutien ou de dégâts magiques.</p>
              <br />

              <h3 className="subtitle">Gordon</h3>
              <p><u>Origine :</u> Ouarzazande</p>
              <p><u>Rôle :</u> Défense et Soutien</p>
              <p><u>Recrutement :</u> libérer Ouarzazande</p>
              <p>Gordon est de retour avec sa mauvaise humeur et sa mauvaise haleine, toujours prêt à faire preuve de la plus gratuite des violences verbales afin de complètement déstabiliser les ennemis.</p>
              <p>Contrairement à ses collègues défenseurs, Gordon possède une majorité d'attaques préventives prioritaires, gardant toujours un tour d'avance dans sa manche.</p>
              <p>Conseillé pour les formations lentes.</p>
              <br />

              <h3 className="subtitle">Mucho Pimenté</h3>
              <p><u>Origine :</u> Puerto Favor</p>
              <p><u>Rôle :</u> Attaque</p>
              <p><u>Recrutement :</u> libérer Puerto Favor</p>
              <p>Ce bon vieux Hubert revient pour prêter main forte aux Chosen Ones, utilisant son grand âge et sa science pour faciliter la vie de ses équipiers, et déteriorer celle de leurs ennemis.</p>
              <p>En bon astrophysicien qui se respecte, Hubert maîtrise l'énergie cosmique, élément efficace contre la majorité des personnages.</p>
              <p>Conseillé pour les formations manquant de soutien ou de dégâts magiques.</p>
              <br />

              <h3 className="subtitle">Exodius</h3>
              <p><u>Origine :</u> Nouillorc</p>
              <p><u>Rôle :</u> Défense et Magie</p>
              <p><u>Recrutement :</u> amener la maman de Jimmy dans son repaire</p>
              <p>Nostalgique de ses aventures dans le Ta-bois-rnak, Exodius reprend du service, toujours grâce à son pouvoir sympathique et sa magie vertueuse.</p>
              <p>Comme tout paladin, ce bon vieil Exodius est un aficionado de l'élement Lumière.</p>
              <p>Conseillé pour les formations manquant de puissance magique ou de défense.</p>
              <br />             

              <h3 className="subtitle">Cap'taine Loudmer</h3>
              <p><u>Origine :</u> port Duavre</p>
              <p><u>Rôle :</u> Attaque</p>
              <p><u>Recrutement :</u> visiter toutes les Îles lointaines une fois et se rendre à Takarajima</p>
              <p>Ce bon vieux Hubert revient pour prêter main forte aux Chosen Ones, utilisant son grand âge et sa science pour faciliter la vie de ses équipiers, et déteriorer celle de leurs ennemis.</p>
              <p>En bon astrophysicien qui se respecte, Hubert maîtrise l'énergie cosmique, élément efficace contre la majorité des personnages.</p>
              <p>Conseillé pour les formations manquant de soutien ou de dégâts magiques.</p>
              <br />

              <h3 className="subtitle">Risryn</h3>
              <p><u>Origine :</u> Takarajima</p>
              <p><u>Rôle :</u> Attaque</p>
              <p><u>Recrutement :</u> terminer sa quête à Takarajima</p>
              <p>Ce bon vieux Hubert revient pour prêter main forte aux Chosen Ones, utilisant son grand âge et sa science pour faciliter la vie de ses équipiers, et déteriorer celle de leurs ennemis.</p>
              <p>En bon astrophysicien qui se respecte, Hubert maîtrise l'énergie cosmique, élément efficace contre la majorité des personnages.</p>
              <p>Conseillé pour les formations manquant de soutien ou de dégâts magiques.</p>
              <br />

              <h3 className="subtitle">???</h3>
              <p><u>Origine :</u> c'est un secret pour tout le monde</p>
              <p><u>Rôle :</u> pareil</p>
              <p><u>Recrutement :</u> atteindre la fin <strong>Prodige</strong></p>
              <p>Le dernier compagnon est classé secret défense, vous devrez explorer le monde et ses mystères si jamais vous souhaitez partir à l'aventure à ses côtés.</p>
              <br />

              </div>
        </div>
        <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#top">Haut de page</a>
          </nav>
        </div>
      </div>
    </div>
  </React.Fragment>
      </div>
      </div>
      );
  }
}

export default Compagnon;