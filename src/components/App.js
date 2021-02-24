
import Header from "./Header";
import QuizControl from './QuizControl';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from "./Signin";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/signin'>
          <Signin/>
        </Route>
        <Route path='/'>
          <QuizControl />
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
