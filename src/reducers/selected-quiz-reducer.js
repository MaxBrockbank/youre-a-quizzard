import * as c from './../actions/ActionTypes';

export default (state=null, action) => {
  const {quizName, description, question1, question2, question3, question4, id, creatorId} = action;
  switch(action.type){
    case c.SELECT_QUIZ:
      return {
        quizName: quizName,
        description: description,
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
        id,
        creatorId
      };
    case c.CLEAR_SELECT:
      return null;
    default:
      return state;
  }
}