import React from 'react';
// import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import ReusableForm from './ReusableForm';
import firebase from 'firebase/app';


function NewQuizForm(props){
  const firestore = useFirestore();

  function addQuizToFirestore(event) {
    event.preventDefault();
    props.onNewQuizCreation();
    
    return firestore.collection('quizzes').add(
      {
        quizName: event.target.quizName.value,
        description: event.target.description.value,
        question1: event.target.question1.value,
        question2: event.target.question2.value,
        question3: event.target.question3.value,
        question4: event.target.question4.value,
        creatorId: firebase.auth().currentUser.uid
      }
    );
  }

  return (
    <>
      <ReusableForm
      formSubmissionHandler={addQuizToFirestore}
      buttonText='Add Quiz'
      />
    </>
  )

}
NewQuizForm.propTypes = {
  onNewQuizCreation: PropTypes.func
}
export default NewQuizForm;

