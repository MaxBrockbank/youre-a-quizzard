import React from 'react';
import NewQuizForm from './NewQuizForm';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import QuizList from './QuizList';

class QuizControl extends React.Component {
  // HANDLERS
  
  handelNewQuiz(){
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  render(){
    //CONDITION RENDERING
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewQuizForm onNewQuizCreation={this.handleNewQuiz}/>
      buttonText = 'Return to Quiz List'
    }else {
      currentlyVisibleState = <QuizList quizList={this.props.mainQuizList} />
    }
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>

    )
  }
}
const mapStateToProps = state => {
  return{
    formVisibleOnPage: state.formVisibleOnPage
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);

export default QuizControl;