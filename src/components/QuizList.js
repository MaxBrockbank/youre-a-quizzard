import React from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import { useSelector } from 'react-redux';
import {isLoaded, useFirestoreConnect } from 'react-redux-firebase';

function QuizList(props){
  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if (isLoaded(quizzes)) {
    return(
      <>
        <hr/>
        {quizzes.map((quiz) => {
          return <Quiz
          whenQuizClicked = {props.onQuizSelection}
          quizName={quiz.quizName}
          description={quiz.description}
          question1= {quiz.question1}
          question2= {quiz.question2}
          question3= {quiz.question3}
          question4= {quiz.question4}
          />
        })}
      </>
    );
  } else {
    return (
      <>
        <h3>No Quizzes Available</h3>
      </>
    )
  }

}
QuizList.propTypes = {
  onQuizSelection: PropTypes.func
}

export default QuizList;