import React from 'react';

export class Accueil extends React.Component {
  render() {
      return (
        <div> 
        <div className="introContainer"> 
            <div className ="intro">
              <h1>Hola guidoune</h1>
              <p>Où sont les mamans ?</p>
            </div>
          </div>
            <img src="https://www.babelio.com/users/AVT_Hubert-Reeves_6775.jpeg" alt="hubert"width="33%" height="66%" />
            <div className="accueilContainer">
              <div className="accueil">
              Bien le bonjour. Je suis Hubert Reeves, astrophysicien, et tu as atterri dans ce qui semble être un site internet relativement miteux m'étant consacré. En réalité, cet amalgame de mémoire vive est un test d'apprentissage pour le framework ReactJS.
              <br />
              <br />
              Comme tu peux le voir, ce site est Reevesponsive.
              <br />
              <br />
              Je n'ai aucune idée de qui peut bien s'en occuper, mais je pense que certains doivent reconsidérer leurs choix de carrière. En effet, il faut savoir que cette photo n'est pas entièrement représentative du mâle alpha que je suis.
              <br />
              <br />
              Vois-tu, je ne me contente pas de seulement repérer les mamans à l'oeil nu et en me fiant à leur fragrance. C'est tout un art : il faut écouter la terre, l'entendre se déformer et résonner à chacun des pas de ta guidoune de maman.
              <br />
              Je ne rentrerai pas dans les détails, car il faut savoir garder ses secrets bien à l'abri dans un coffre-fort sous triple verrou électronique.
              <br />
              <br />
              Ce site a malheureusement été approuvé et estampillé par mon généreux et ô combien onéreux poinçon, soi-disant gage de qualité. La qualité n'est pas vraiment le fort de ce bon vieux Darumacho.
              <br />
              Il n'assume tellement pas ce site qu'il est obligé de prendre le pseudo de Guidoune Man.
              <br />
              <br />
              À mon humble avis, il faut rajouter une section "Guidoune de l'année" où sa photo siègerait tout au long des deux solstices et équinoxes.
              </div>
            </div>
        </div>
      );
  }
}