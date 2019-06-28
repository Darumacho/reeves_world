import React from 'react';

export class Guidoune extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText('guidoune ');
    }, 15);
  }
  
  componentWillUnmount(prevProps, prevState){
    clearInterval(this.interval);
  }

  render() {
    return (
      <button onClick={this.props.toggle}>
        J'ai eu ma dose
      </button>
    );
  }
}