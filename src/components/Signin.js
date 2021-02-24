import React from 'react';
import firebase from 'firebase/app';
import * as a from './../actions/index';
import { useSelector, useDispatch } from 'react-redux'

function Signin() {

  const dispatch = useDispatch();

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log('successfully signed up!')
    }).catch(function(error) {
      console.log(error.message);
    });
    dispatch(a.toggleSignin());
  }

  function doSignIn(event){
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      console.log('Successfully Signed In')
    }).catch(function(error){
      console.log(error.message);
    });
  }

  function doSignOut(){
    firebase.auth().signOut().then(function(){
      console.log('Successfully Signed Out')
    }).catch(function(error){
      console.log(error.message)
    })
  }

  
  const signInDiv =
  <div>
    <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signInEmail'
          placeholder='Email'
          defaultValue = ''/>

        <input
          type='password'
          name='signInPassword'
          placeholder='Password'
          defaultValue = ''/>
        <button type='submit'>Sign in</button>
      </form>
      <button onClick={()=>(changeForm())}>Don't have an account?</button>
  </div>
  const signUpDiv=
  <div>
    <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input 
          type='password'
          name='password'
          placeholder='Password'/>
        <button type='submit'>Sign Up</button>
      </form>
  </div>;
  function changeForm(){
    dispatch(a.toggleSignin());
  }
  
  const hasAccount = useSelector(state => state.hasAccount);

  const handleAuthFormDisplay = (hasAccount) => {
    return hasAccount ? signInDiv : signUpDiv
  }

  const authFormCurrentlyVisible = handleAuthFormDisplay(hasAccount);

  return(
    <>
      {authFormCurrentlyVisible}

    <h1>Sign Out</h1>
    <button onClick={doSignOut}>Sign Out</button>
    </>
  );  
}


export default Signin;