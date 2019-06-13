import React from 'react';

export class Trafic extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          trafic: [],
      };
  }

  componentDidMount(){
      fetch('https://www.mapquestapi.com/traffic/v2/incidents?&outFormat=json&boundingBox=45.57896451566304%2C-73.36875915527344%2C45.43893551313961%2C-73.73783111572266&key=7DTuK5fXabSzCGAFv4XHpTrUyi1J8ANu')
      .then(results => {
        console.log(results);
          return results.json();
      }).then(data => {
          let trafic = data.results.map((trafic) => {
              return(
                  <div className="meteo">
                  Niveau circulation, d'après les Montréalais, la situation est la suivante
                  <br />
                  <u>{trafic.incidents.fullDesc}</u>
                  <br />
                  </div>
              )
          })
          this.setState({trafic: trafic});
          console.log("state", this.state.trafic);
      })
  }

  render() {
      return(
          <div className="meteoContainer">
              {this.state.trafic}
          </div>
      )
  }
}

export default Trafic;