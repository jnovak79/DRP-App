import React from 'react';
import DeadlineForm from './DeadlineForm.jsx';

const DeadlineFormHolder = function () {

  return (
    <section className='deadlineFormHolder'>
      Add a New Task
      <DeadlineForm />
    </section>
  )
}

export default DeadlineFormHolder;