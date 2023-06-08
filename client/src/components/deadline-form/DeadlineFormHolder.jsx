import React from 'react';
import DeadlineForm from './DeadlineForm.jsx';

const DeadlineFormHolder = function ({setDeadlines}) {

  return (
    <section className='deadlineFormHolder'>
      <span className='formHeader'>Add a New Task</span>
      <DeadlineForm  setDeadlines={setDeadlines}/>
    </section>
  )
}

export default DeadlineFormHolder;