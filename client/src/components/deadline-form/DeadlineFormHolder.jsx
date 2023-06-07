import React from 'react';
import DeadlineForm from './DeadlineForm.jsx';

const DeadlineFormHolder = function ({setDeadlines}) {

  return (
    <section className='deadlineFormHolder'>
      Add a New Task
      <DeadlineForm  setDeadlines={setDeadlines}/>
    </section>
  )
}

export default DeadlineFormHolder;