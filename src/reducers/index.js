import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import formVisibleReducer from './form-visible-reducer';
import quizListReducer from './quiz-list-reducer';
import quizEditReducer from './quiz-editing-reducer';
import selectedQuizReducer from './selected-quiz-reducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  formVisibleOnPage: formVisibleReducer,
  mainQuizList: quizListReducer,
  editing: quizEditReducer,
  selectedQuiz: selectedQuizReducer
})

export default rootReducer;