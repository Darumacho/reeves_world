import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      Tu es <strong>{props.quizResult}</strong> : {props.desc}
      <br />
      <br />
      <strong><u>{props.statut} célèbres :</u></strong> {props.famous}.
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  statut: PropTypes.string.isRequired,
  famous: PropTypes.string.isRequired
};

export default Result;