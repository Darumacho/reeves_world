import React from 'react';
import '../index.css';
import { Guidoune } from '../Guidoune';

export class Rain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Guidoune: false,
      text: ''
    };

    this.toggleEnthusiasm = this.toggleEnthusiasm.bind(this);
    this.addText = this.addText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEnthusiasm() {
    this.setState({
      Guidoune: !this.state.Guidoune
    });
  }

  setText(text) {
    this.setState({ text: text});
  }

  addText(newText) {
    let text = this.state.text + newText;
    this.setState({ text: text});
  }

  handleChange(e) {
    this.setText(e.target.value);
  }

  render() {
    let button;
    if (this.state.Guidoune) {
      button = (
        <Guidoune toggle={this.toggleEnthusiasm} addText={this.addText} />
      );
    } else {
      button = (
        <div>
        <button onClick={this.toggleEnthusiasm}>
          Pluie de guidounes !
        </button>
        </div>
      );
    }

    return (
      <div>
        <h1><font color="white">Météo du jour</font></h1>
        <textarea rows="7" cols="40" value={this.state.text} 
          onChange={this.handleChange}>
        </textarea>
        {button}
      </div>
    );
  }
}