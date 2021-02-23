import React from 'react';
//import PropTypes from 'prop-types';

function Question() {

  return(
    <>
      <textarea name='question' placeholder='Question Text' required/>
      <input type='text' name='correctAnswer' placeholder='Correct Answer' required/>
      <input type='text' name='option2' placeholder='Answer Option 2' required/>
      <input type='text' name='option3' placeholder='Answer Option 3' required/>
      <input type='text' name='option4' placeholder='Answer Option 4' required/>
    </>
    
  )
}
export default Question;