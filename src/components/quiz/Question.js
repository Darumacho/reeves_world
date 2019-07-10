import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return (
    <h2 className="question">
    {props.content}
    <br />
    <img src={props.image} width="40%" height="40%"/>
    </h2>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Question;