import React from 'react';
//import { firestoreConnect } from 'react-redux-firebase';
//import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import Question from './Question';
//import QuizControl from './QuizControl';

function NewQuizForm(props){
  const firestore = useFirestore();

  function addQuizToFirestore(event) {
    event.preventDefault();
    //props.onNewQuizCreation();
    const quiz = {
      quizName: event.target.quizName.value,
      category: event.target.category.value,
      questions:[]
    }
    event.target.foreach(question => 
      this.quiz.questions.push({
        questionText: event.target.question.questionName.value,
        correctAnswer:event.target.question.correctAnswer.value,
        answerOptions: [
          event.target.question.correctAnswer.value,
          event.target.question.option2.value,
          event.target.question.option3.value,
          event.target.question.option4.value
        ]
      }))
    return firestore.collection('quizzes').add(quiz)
    // let quiz = [event.target.querySelectorAll(".test")];
    // // const mapped = quiz.map(group => {
    // //   return group.children
    // // })
    // console.log(quiz);
    // console.log(event.target.test);
    // console.log(event.target.test.question);
    // console.log(event.target.question.value);
    // // return firestore.collection('quizzes').add(quiz)
  }

  return (
    <>
      <form onSubmit={addQuizToFirestore}>
        <input type='text' name="quizName" placeholder="Your Quiz Name" />
        <input type='text' name="category" placeholder="Your Quiz Category" />
        <br/>
        <div className="test">
          <Question />

        </div>

        <button type='submit'>Submit</button>
      </form>

    </>
  )

}
export default NewQuizForm;
