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


export const selectQuiz = () => ({
  type: c.SELECT_QUIZ
})

export const clearSelect = () => ({
  type: c.CLEAR_SELECT
})