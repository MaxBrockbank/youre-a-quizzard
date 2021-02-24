import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import ReusableForm from './ReusableForm';

function EditQuizForm(props){
  const firestore = useFirestore();
  const { quiz } = props;

  function handleEditQuizFormSubmission(event) {
    event.preventDefault();
    props.onEditQuiz();
    const propertiesToUpdate = {
      quizName: event.target.quizName.value,
      description: event.target.description.value,
      question1: event.target.question1.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,
      question4: event.target.question4.value,
    }
    return firestore.update({collection: 'quizzes', doc: quiz.id}, propertiesToUpdate)
  }

  return(
    <>
      <ReusableForm 
      quiz={props.quiz}
      formSubmissionHandler = {handleEditQuizFormSubmission}
      buttonText='Update Quiz'/>
    </>
  );

}

EditQuizForm.propTypes = {
  quiz: PropTypes.object,
  onEditQuiz: PropTypes.func
}

export default EditQuizForm;