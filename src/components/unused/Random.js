import React from 'react';

import {Button} from './unused/colorButton.js/index.js';

export class Random extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: [0, 0, 0] }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'RGB(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  
  handleClick(){
    this.setState(
      {color: this.chooseColor()}
    );
  }

  render() {
    return (
      <div>
      <br/><br/>
        <h1 className={this.isLight() ? 'white' : 'black'}>
Ton code couleur est {this.formatColor(this.state.color)} !
        </h1>
        <br/>
        <Button light={this.isLight()} 
          onClick={this.handleClick}/>
          <br/>
          <br/>
          <div>Astuce : si tu appuies rapidement, ça te fait une discothèque maison.</div>
          <div>Ou un vecteur d'épilepsie photosensible.</div>
          <br/>
          <br/>
          <div>Tu peux réinitialiser le fond d'origine en cliquant sur le logo du site.</div>
      </div>
    );
  }
}