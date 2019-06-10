import React from 'react';

export class Persos extends React.Component {
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
          <a class="btn btn-outline-primary" href="#amis">Les amis</a>
          <a class="btn btn-outline-primary" href="#mechant">Les méchants</a>
          <a class="btn btn-outline-primary" href="#compagnon">Les compagnons</a>
        </nav>
          <div class="blog-post">
              <h2 class="blog-post-title" id="chosen">Les Chosen Ones</h2>
              <br />
              <div class="miniContainer">
              <h3 className="subtitle">Chester</h3>
              <p><u>Origine :</u> Arborescence</p>
              <p><u>Rôle :</u> Polyvalent</p>
              <p>Son titre est <strong>l'Arborescent</strong>.</p>
              <p>Il est le plus sage des Chosen Ones, et également le plus expérimenté, capable d'agir dans un grand nombre de domaines. Chester voue une fascination pour le Power, sur lequel sont basées la plupart de ses compétences. On le recontre alors qu'il tente d'atteindre un plan d'existence supérieur, désireux d'acquérir la sagesse et la Connaissance infinies.</p>
              <p>Il est toujours prêt à rendre service et reste d'un naturel sérieux par rapport à ses camarades.</p>
              <p>Ah, et il dispose de pouvoirs électriques aussi !</p>
              <br />

              <h3 className="subtitle">Tirashi</h3>
              <p><u>Origine :</u> Royaume du Nord</p>
              <p><u>Rôle :</u> Défense</p>
              <p>Son titre est <strong>le Hacheur Parmentier</strong>.</p>
              <p>Endurci par le froid mordant et cruel des régions septentrionales, Tirashi est un paladin incroyablement robuste et solidaire, mettant son grand coeur et son bouclier au service des plus démunis. Il est chargé par le roi du Nord de mettre fin à un conflit régional entre plusieurs tribus, afin d'éviter l'implosion diplomatique.</p>
              <p>Son franc-parler lui donne des airs de rustre, cachant une camaraderie à toute épreuve.</p>
              <p>Sans éviter tout cliché, il dispose de pouvoirs de glace.</p>
              <br />

              <h3 className="subtitle">Sckald</h3>
              <p><u>Origine :</u> Motopolis</p>
              <p><u>Rôle :</u> Attaque</p>
              <p>Son titre est <strong>le Rider</strong>.</p>
              <p>Parcourant sur son bicycle les valereuses terres montagneuses de Motopolis, Sckald est un Chosen One au phrasé exotique, typique de sa contrée d'origine. Il est le plus rapide des Chosen Ones, fendant les airs et le crâne des Jhâvas à l'aide de redoutables attaques frontales. Tout comme ses compatriotes, il voue un culte aux divinités de la mythologie locale, et est pressenti par le maire Robert Charlebois d'aller retarder le coup de patoune du Grand Carcajou.</p>
              <p>Malgré des répliques métaphoriques et très nébuleuses, il garde la tête sur les épaules (contrairement à certains).</p>
              <p>Sckald ne maîtrise aucun élément, mais est en mesure d'infliger le plus grand nombre de statuts possibles.</p>
              <br />

              <h3 className="subtitle">Le Flo</h3>
              <p><u>Origine :</u> Flocéliande</p>
              <p><u>Rôle :</u> Attaque</p>
              <p>Son titre est <strong>le Trublion</strong>.</p>
              <p>Le Flo est le représentant de son peuple, une tribu animale très primitive vivant dans la jungle moite de Flocéliande sobrement appelée les Flo. N'ayant pas appris les bases du combat conventionnel, le Flo compte sur sa carrure naturelle pour lui prodiguer une agilité lui permettant de compenser ses défenses extrêmement faibles par un taux d'esquive et de critique très supérieur à la moyenne. Il prend part à la bataille de Flocéliande, en repoussant une armée industrielle venue déforester la jungle.</p>
              <p>La majorité des Flo n'étant pas douée de parole, le Flo ne s'exprime qu'avec des gestes, des cris et la fameuse coutume.</p>
              <p>Les délices de cette coutume l'amène à se spécialiser dans le Poison.</p>
              <br />

              <h3 className="subtitle">Nico</h3>
              <p><u>Origine :</u> Chopejambon Ville</p>
              <p><u>Rôle :</u> Soutien et Défense</p>
              <p>Son titre est <strong>le Dabber</strong>.</p>
              <p>Nico était un citoyen lambda de Chopejambon Ville avant qu'il ne soit nommé Chosen One. Il maîtrise un art martial ancestral, utilisant les propres forces de ses adversaires pour les défaire. La ville étant le théâtre permanent d'affrontements entre super-héros et super-méchants, Nico est vite capturé par la bande du Blagueur, afin que nul autre ne puisse les arrêter. Il sera libéré grâce aux super-héros Matante Man et Câlisse Boy.</p>
              <p>Il ponctue souvent ses phrases par un DAB, devenu un TIC suite à la pratique de son art martial.</p>
              <p>Nico ne maîtrise aucun élément, et est le Chosen One le plus complexe à prendre en main.</p>
              <br />

              <h3 className="subtitle">Tom Tom</h3>
              <p><u>Origine :</u> Archipel de Musik</p>
              <p><u>Rôle :</u> Magie et Soutien</p>
              <p>Son titre est <strong>le Dude on Fire</strong>.</p>
              <p>Tom Tom est un DJ semeur de bonne humeur, considéré comme une légende locale. Son statut de Dude on Fire ainsi que son aura agréable font de lui un incroyable pyromancien et un très bon soigneur. Il est presque toujours appelé par son statut, et organise d'ailleurs une très grande fête avant son départ, aidé par les différents habitants de l'Archipel.</p>
              <p>Il a le pouvoir de redonner le sourire à n'importe qui est fait preuve d'une immense sympathie envers tous ceux qu'il rencontre.</p>
              <p>Comme son nom l'indique, il maîtrise le feu comme nul autre.</p>
              <br />

              <h3 className="subtitle">Darumacho</h3>
              <p><u>Origine :</u> Empire à Steak</p>
              <p><u>Rôle :</u> Défense</p>
              <p>Son titre est <strong>la Demi-Portion</strong>.</p>
              <p>Endurci par le froid mordant et cruel des régions septentrionales, Tirashi est un paladin incroyablement robuste et solidaire, mettant son grand coeur et son bouclier au service des plus démunis. Il est chargé par le roi du Nord de mettre fin à un conflit régional entre plusieurs tribus, afin d'éviter l'implosion diplomatique.</p>
              <p>Son franc-parlé lui donne des airs de rustre, cachant une camaraderie à toute épreuve.</p>
              <p>Sans éviter tout cliché, il dispose de pouvoirs de glace.</p>
              <br />

              <h3 className="subtitle">Metsugazan</h3>
              <p><u>Origine :</u> Domaine de Silverberg</p>
              <p><u>Rôle :</u> Attaque et Magie</p>
              <p>Son titre est <strong>le Faussaire</strong>.</p>
              <p>Endurci par le froid mordant et cruel des régions septentrionales, Tirashi est un paladin incroyablement robuste et solidaire, mettant son grand coeur et son bouclier au service des plus démunis. Il est chargé par le roi du Nord de mettre fin à un conflit régional entre plusieurs tribus, afin d'éviter l'implosion diplomatique.</p>
              <p>Son franc-parlé lui donne des airs de rustre, cachant une camaraderie à toute épreuve.</p>
              <p>Sans éviter tout cliché, il dispose de pouvoirs de glace.</p>
              <br />

              <h3 className="subtitle">Arcthane</h3>
              <p><u>Origine :</u> Vallétale</p>
              <p><u>Rôle :</u> Polyvalent</p>
              <p>Son titre est <strong>la Conquérante</strong>.</p>
              <p>Endurci par le froid mordant et cruel des régions septentrionales, Tirashi est un paladin incroyablement robuste et solidaire, mettant son grand coeur et son bouclier au service des plus démunis. Il est chargé par le roi du Nord de mettre fin à un conflit régional entre plusieurs tribus, afin d'éviter l'implosion diplomatique.</p>
              <p>Son franc-parlé lui donne des airs de rustre, cachant une camaraderie à toute épreuve.</p>
              <p>Sans éviter tout cliché, il dispose de pouvoirs de glace.</p>
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

export default Persos;