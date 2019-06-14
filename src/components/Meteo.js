import React from 'react';

export class Meteo extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          meteo: '',
      };
  }

  componentDidMount(){
      fetch('api.openweathermap.org/data/2.5/weather?q=Montreal,ca&appid=51d5e4468cdfba287d70bd5e0c2493c0&mode=json')
      .then(results => {
        //console.log(results);
          return results.json();
      }).then(data => {
          //console.log(data);
          //console.log(typeof data);
          let boy = data.results.map((meteo) => {
              return(
                  <div className="meteo">
                  Alors aujourd'hui à Montréal, niveau climat, on traîne plutôt côté
                  <br />
                  <u>
                  {meteo.weather[0].description}
                  </u>
                  <br />
                  <br />
                    La température est de {meteo.main.temp}°C.
                    <br />
                    Et en plus, il y'a un petit vent qui souffle à {meteo.wind.speed} Km/h.
                  </div>
              )
          })
          this.setState({meteo: boy});
          //console.log("state", this.state.meteo);
      })
  }

  render() {
      return(
          <div className="meteoContainer">
              {this.state.meteo}
          </div>
      )
  }
}

export default Meteo;