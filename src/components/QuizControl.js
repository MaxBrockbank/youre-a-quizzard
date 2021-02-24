import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import EditQuizForm from './EditQuizForm';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import { withFirestore, isLoaded} from 'react-redux-firebase';

class QuizControl extends React.Component {
  
  // HANDLERS
  handleClick = () => {
    const { dispatch } = this.props
    if(this.props.selectedQuiz != null){
      if(this.props.formVisibleOnPage){
        const action = a.toggleForm();
        dispatch(action);
      }
      const action2 = a.clearSelect();
      dispatch(action2)
      if(this.props.editing){
        const action3 = a.toggleEdit();
        dispatch(action3);
      }
    }else{
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  handleNewQuiz = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
  handleChangingSelectedQuiz = (id) => {
    const {dispatch} = this.props;
    this.props.firestore.get({collection:'quizzes', doc: id}).then((quiz) => {
      const firestoreQuiz = {
        quizName: quiz.get('quizName'),
        description: quiz.get('description'),
        question1: quiz.get('question1'),
        question2: quiz.get('question2'),
        question3: quiz.get('question3'),
        question4: quiz.get('question4'),
        id: quiz.id,
        creatorId: quiz.get('creatorId')
      }
      const action = a.selectQuiz(firestoreQuiz);
      dispatch(action);
    })
  }

  handleEditClick = () => {
    const {dispatch} = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }
  handleDeletingQuiz = (id) => {
    const { dispatch } = this.props;
    this.props.firestore.delete({collection: 'quizzes', doc: id});
    const action = a.clearSelect();
    dispatch(action);
  }
  handleEditQuizInList = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    const action2 = a.clearSelect();
    dispatch(action);
    dispatch(action2);
  }

  render(){
    //CONDITION RENDERING
    let currentlyVisibleState = null;
    let buttonText = null;
    const auth = this.props.firebase.auth();
    if(! isLoaded(auth)) {
      return(
        <>
          <h1>Loading...</h1>
        </>
      )
    }
    if((isLoaded(auth)) && (auth.currentUser == null)) {
      return(
        <>
          <h1>You must be signed in to access the queue.</h1>
        </>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      if(this.props.editing) {
        currentlyVisibleState =
        <EditQuizForm 
        quiz={this.props.selectedQuiz} 
        onEditQuiz={this.handleEditQuizInList}/>
        buttonText = 'Return to Quiz List'
      }else if (this.props.selectedQuiz != null){
        currentlyVisibleState=
        <QuizDetail
        quiz = {this.props.selectedQuiz}
        onClickingDelete= {this.handleDeletingQuiz}
        onClickingEdit= {this.handleEditClick}
        />
        buttonText = 'Return to Quiz List'
      }else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm onNewQuizCreation={this.handleNewQuiz}/>
        buttonText = 'Return to Quiz List'
      }else {
        currentlyVisibleState = <QuizList quizList={this.props.mainQuizList} onQuizSelection={this.handleChangingSelectedQuiz}/>
        buttonText = 'Create Quiz'
      }
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
    formVisibleOnPage: state.formVisibleOnPage,
    mainQuizList: state.mainQuizList,
    selectedQuiz: state.selectedQuiz,
    editing: state.editing
  }
}
QuizControl = connect(mapStateToProps)(QuizControl);

export default withFirestore(QuizControl);