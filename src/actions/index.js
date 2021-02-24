import * as c from './ActionTypes';

export const deleteQuiz = id => ({
  type: c.DELETE_QUIZ,
  id
})

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
})


export const selectQuiz = (quiz) => {
  const {quizName, description, question1, question2, question3, question4, id} = quiz;
  return {
  type: c.SELECT_QUIZ,
  quizName,
  description,
  question1,
  question2, 
  question3,
  question4,
  id
  }
}

export const clearSelect = () => ({
  type: c.CLEAR_SELECT
})