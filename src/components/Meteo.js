import React from 'react';

export class Meteo extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          meteo: [],
      };
  }

  componentDidMount(){
      fetch('api.openweathermap.org/data/2.5/weather?q=Montreal&APIKey=51d5e4468cdfba287d70bd5e0c2493c0')
      .then(results => {
          return results.json();
      }).then(data => {
          let meteo = data.results.map((montreal) => {
              return(
                  <div className="meteo">
                  <font size="16">Alors aujourd'hui à Montréal, il y a des :</font> <br /><br />
                  <u>{montreal.weather.main}, je dirais même plus des {montreal.weather.description}</u>
                  <br />
                  <br />
                    La température est de {montreal.main.temp}° Kelvin, car nous aimons les mesures compliquées.
                    <br />
                    Et en plus, il y'a un petit vent qui souffle à {montreal.wind.speed} MPH (car on a le système impérial en cette belle province de Québec, boy)
                  </div>
              )
          })
          this.setState({meteo: meteo});
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