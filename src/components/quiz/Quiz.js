import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question.js';
import QuestionCount from './QuestionCount.js';
import AnswerOption from './AnswerOption.js';
import './quiz.css';

function Quiz(props) {
    function renderAnswerOptions(key) {
      return (
        <AnswerOption
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          answer={props.answer}
          questionId={props.questionId}
          onAnswerSelected={props.onAnswerSelected}
        />
      );
    }
  
    return (
        <div key={props.questionId}>
            <QuestionCount counter={props.questionId} total={props.questionTotal} />
            <Question content={props.question} image={props.image}/>
            <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
  }
  
  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };
  
  export default Quiz;