import React from 'react';
import axios from 'axios';

const Accident = ({ fullDesc }) => {
    return (
        <div className="trafic">
            Niveau circulation, d'après les Montréalais anglophones, la situation est la suivante
            <br />
            <u>{fullDesc}</u>
            <br />
            <br />
            On n'a pas pu entrevoir de Montréalais francophone malheureusement.
        </div>
    );
};


export class Trafic extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        accident: null,
      };
  }

  componentDidMount(){
      axios.post('https://www.mapquestapi.com/traffic/v2/incidents?&outFormat=json&boundingBox=45.57896451566304%2C-73.36875915527344%2C45.43893551313961%2C-73.73783111572266&key=7DTuK5fXabSzCGAFv4XHpTrUyi1J8ANu')
      .then(results => {
          const accident = results.data;

          this.setState({ accident });
          console.log(accident);
      })
  }

  render() {
    const { accident } = this.state;
      return(
        <div className="traficContainer">
        {accident ? (
            <Accident
                fullDesc={accident.incidents[0].fullDesc}
            />    
        ) : 'Chargement des données trafic...'}
        
      </div>
      )
  }
}

export default Trafic;