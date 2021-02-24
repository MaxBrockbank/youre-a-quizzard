import React from 'react';
import { useFirestore} from 'react-redux-firebase';
//import firebase from 'firebase/app';
import PropTypes from 'prop-types';


function QuizDetail(props){
  const {onClickingDelete, onClickingEdit, quiz } = props;
  const firestore = useFirestore();
  function handleQuizResponse(event) {
    event.preventDefault();
    const quizResponse = {
      response1: event.target.response1.value,
      response2: event.target.response2.value,
      response3: event.target.response3.value,
      response4: event.target.response4.value,
      quizId: quiz.id
    }
    return firestore.collection('completedQuizzes').add(quizResponse);
  }
  const updateAndDeleteBtn = 
  <div>
    <button onClick={onClickingEdit}>Edit Quiz</button>
    <button onClick={() => onClickingDelete(quiz.id)}>Delete Quiz</button>
  </div>


  return(
    <>
      {console.log(quiz)}
      <h1>{quiz.quizName} - {quiz.description}</h1>
      <form id="responseForm" onSubmit={handleQuizResponse}>
        <h2>{quiz.question1}</h2>
        <textarea name='response1' type='text' placeholder='Log your response here.'/>
        <h2>{quiz.question2}</h2>
        <textarea name='response2' type='text' placeholder='Log your response here.'/>
        <h2>{quiz.question3}</h2>
        <textarea name='response3' type='text' placeholder='Log your response here.'/>
        <h2>{quiz.question4}</h2>
        <textarea name='response4' type='text' placeholder='Log your response here.' />
        <button type='submit'>Submit Response</button>
      </form>
      {updateAndDeleteBtn}
    </>
  )
}


QuizDetail.propTypes = {
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}
export default QuizDetail;