import React from 'react';
import axios from 'axios';

const Boy = ({ description, temp, speed }) => {
    temp = temp.toFixed(1);
    speed = speed.toFixed(1);
    let styles = getColor(temp);
    return (
        <React.Fragment>
        <div className="meteo">
            Alors aujourd'hui à Montréal, niveau climat, on traîne plutôt côté
            <br />
            <u>
            {description}
            </u>
            <br />
            <br />
          La température est de {temp}°C.
          <div className="jauge" style={styles}></div>
          <br />
          Et en plus, il y'a un petit vent qui souffle à {speed} Km/h.          
        </div>
        </React.Fragment>
    );
};

function getColor(temp){
    let hexColor = '';
    let percentGauge = '';
    
    switch(true){
        case (temp<-10.0):
            hexColor = '#d4f6f9';
            percentGauge = '3%';
            break;

        case (temp>=-10.0 && temp<0.0):
            hexColor = '#54ceff';
            percentGauge = '10%';
            break;

        case (temp>=0.0 && temp<6.0) :
            hexColor = '#29afe5';
            percentGauge = '20%';
            break;
            
        case (temp>=6.0 && temp<12.0) :
            hexColor = '#c1ff75';
            percentGauge = '40%';
            break;
                                
        case (temp>=12.0 && temp<20.0) :
            hexColor = '#ffeb3f';
            percentGauge = '50%';
            break;
                                                    
        case (temp>=20.0 && temp<24.0) :
            hexColor = '#f99325';
            percentGauge = '60%';
            break;
                                                                        
        case (temp>=24.0 && temp<30.0) :
            hexColor = '#f92824';
            percentGauge = '75%';
            break;
                                                                                            
        case (temp>=30.0 && temp <35.0) :
            hexColor = '#aa0805';
            percentGauge = '95%';
            break;

        case (temp>=35.0) :
            hexColor = '#560808';
            percentGauge = '100%';
            break;

        default :
            hexColor = '#ffeb3f';
            percentGauge = '50%';
    }
    return {
        background: '-moz-linear-gradient(left, ' + hexColor +'  0%, ' + hexColor + ' ' + percentGauge +' , white ' + percentGauge +' , white 100%)'
    }
}

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