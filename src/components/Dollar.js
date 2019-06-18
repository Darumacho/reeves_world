import React from 'react';
import axios from 'axios';

const CAD = ({ money }) => {
    return (
        <div className="trafic">
            Le Dollar Canadien vaut toujours
            <br />
            <u>{money}€</u>
            <br />
            <br />
        </div>
    );
};


export class Dollar extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        dollar: null,
      };
  }

  componentDidMount(){
      axios.post('http://api.openrates.io/latest?base=CAD')
      .then(results => {
          const dollar = results.data;

          this.setState({ dollar });
          console.log(dollar);
      })
  }

  render() {
    const { dollar } = this.state;
      return(
        <div className="traficContainer">
        {dollar ? (
            <CAD
                fullDesc={dollar.rates.EUR}
            />    
        ) : 'Chargement de la sweet sweet money...'}
        
      </div>
      )
  }
}

export default Dollar;