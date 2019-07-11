import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      Tu es <strong>{props.quizResult}</strong> : {props.desc}
      <br />
      <br />
      <img src={props.img} width="33%" height="33%"/>
      <br />
      <br />
      <strong><u>{props.statut} célèbres :</u></strong> {props.famous}.
      <nav class="blog-pagination">
        <a class="btn btn-outline-primary" href="/quiz">Recommencer</a>
      </nav>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  statut: PropTypes.string.isRequired,
  famous: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Result;