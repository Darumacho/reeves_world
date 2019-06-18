import React from 'react';

export class Mechant extends React.Component {
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
              <h2 class="blog-post-title" id="chosen">Les méchants</h2>
              <br />
              <div class="miniContainer">
              <h3 className="subtitle">Khon Fethi</h3>
              <p><u>Titre :</u> Chef de raid</p>
              <p><u>Lieu(x) de rencontre :</u> Sacramenbourg</p>
              <p>Khon Fethi est le premier Garbage Collector à être affronté par les Chosen Ones. Il est le chef du raid ayant pris d'assaut la ville de Sacramenbourg et dirige une petite troupe d'une vingtaine de disciples.</p>
              <p>Khon Fethi étant le plus faible de ses camarades, la tâche qui lui a été confiée ne relevait d'aucun risque - c'était sans compter sur l'arrivée des Chosen Ones dans la ville très isolée de Sacramenbourg.</p>
              <br />

              <h3 className="subtitle">José</h3>
              <p><u>Titre :</u> Jhâvarchevêque</p>
              <p><u>Lieu(x) de rencontre :</u> Nouillorc, CCI, Ruines Dimensionnelles, Puerto Favor et Matrice Jhâva</p>
              <p>José est le chef religieux de l'ordre Jhâva, également évêque de la nouvelle Jhâvathédrâle. Il possède l'un des statuts les plus importants de tout son ordre, et est en étroite collaboration avec le seigneur des Profondeurs.</p>
              <p>José s'est vu confier la majorité de la Conversion++, convertissant ainsi tous les lieux de culte du C++ au Java. Contrairement à ses camarades, il n'est jamais vraiment hostile envers les Chosen Ones, comme s'il semblait défendre leur cause.</p>
              <p>Peut-être que ses motivations ambigües cachent un personnage au statut bien plus important qu'on puisse s'imaginer ?</p>
              <br />

              <h3 className="subtitle">Abdelfattah Stérix</h3>
              <p><u>Titre :</u> Délesteur de Deniers</p>
              <p><u>Lieu(x) de rencontre :</u> Nouillorc</p>
              <p>Magnat absolu de la finance nouillorcaise, A. Stérix a vite pris contact avec les Jhâvas avant que Nouillorc ne soit investie, devenant ainsi un régent auto-proclamé. Il participe à plusieurs évènements se déroulant dans d'autres contrées, comme le financement de l'expédition industrielle de Flocéliande, ou bien le rachat du COUAC 40 de Chopejambon Ville.</p>
              <p>A. Stérix est le seul à avoir "acheté" son titre de Garbage Collector, ce qui explique pourquoi il est quelque peu ignoré par le reste de l'ordre Jhâva.</p>
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

export default Mechant;