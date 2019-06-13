import React from 'react';
import PropTypes from 'prop-types';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest) {
      this.setState({
        highest: nextProps.number
      });
    }
  }

  render() {
    return (
      <div>
      <h1>
        Top : {this.state.highest}
      </h1>
      <h2 font size="8">Clique sur les nombres</h2>
      </div>
    );
  }
}

TopNumber.propTypes = {
  number: PropTypes.number,
  game: PropTypes.bool
};