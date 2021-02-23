import React from 'react';
//import { firestoreConnect } from 'react-redux-firebase';
//import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
//import Question from './Question';
//import QuizControl from './QuizControl';

function NewQuizForm(props){
  const firestore = useFirestore();

  function addQuizToFirestore(event) {
    event.preventDefault();
    props.onNewQuizCreation();
    
    return firestore.collection('quizzes').add(
      {
        quizName: event.target.name.value,
        description: event.target.description.value,
        question1: event.target.question1.value,
        question2: event.target.question2.value,
        question3: event.target.question3.value,
        question4: event.target.question4.value,
      }
    );
    
  }

  return (
    <>
      <form onSubmit={addQuizToFirestore}>
        <label htmlFor='quizName'>Quiz Name</label>
        <input type='text' name="quizName" placeholder="Your Quiz Name" />
        <label htmlFor='description'>Description</label>
        <input type='text' name="description" placeholder="Description of Quiz" />
        <br/>
        <label htmlFor='question1'>Question1</label>
        <textarea type='text' name='question1' /><br/>
        <label htmlFor='question1'>Question2</label>
        <textarea type='text' name='question2' /><br/>
        <label htmlFor='question1'>Question3</label>
        <textarea type='text' name='question3' /><br/>
        <label htmlFor='question1'>Question4</label>
        <textarea type='text' name='question4' /><br/>

        <button type='submit'>Submit</button>
      </form>

    </>
  )

}
export default NewQuizForm;

