import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import formVisibleReducer from './form-visible-reducer';
import quizListReducer from './quiz-list-reducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  formVisibleOnPage: formVisibleReducer,
  mainQuizList: quizListReducer
})

export default rootReducer;