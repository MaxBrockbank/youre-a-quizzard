import React from 'react';
import PropTypes from 'prop-types';


function Quiz (props) {
  return(
    <>
      <div onClick= {() => props.whenQuizClicked(props.id)}>
        <h3>{props.quizName}</h3>
        <p>{props.description}</p>
      </div>
    </>
  )
}

Quiz.propTypes = {
quizName: PropTypes.string,
description: PropTypes.string,
question1: PropTypes.string,
question2: PropTypes.string,
question3: PropTypes.string,
question4: PropTypes.string,
id: PropTypes.string,
creatorId: PropTypes.string,
whenQuizClicked: PropTypes.func
}

export default Quiz;