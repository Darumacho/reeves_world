import React from 'react';
import axios from 'axios';

const Boy = ({ description, temp, speed }) => {
    return (
        <div className="meteo">
            Alors aujourd'hui à Montréal, niveau climat, on traîne plutôt côté
            <br />
            <u>
            {description}
            </u>
            <br />
            <br />
          La température est de {temp}°C.
          <br />
          Et en plus, il y'a un petit vent qui souffle à {speed} Km/h.
        </div>
    );
};

export class Meteo extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          montreal: null,
      };
  }

  componentDidMount(){
      axios.post('http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&appid=51d5e4468cdfba287d70bd5e0c2493c0&units=metric&lang=fr')
      .then(results => {
          const montreal = results.data;

          this.setState({ montreal });
          console.log(montreal);
      })
  }

  render() {
        const { montreal } = this.state;

      return(
          <div className="meteoContainer">
            {montreal ? (
                <Boy
                    description={montreal.weather[0].description}
                    temp={montreal.main.temp}
                    speed={montreal.wind.speed}
                />    
            ) : 'Chargement des données météo...'}
            
          </div>
      )
  }
}

export default Meteo;