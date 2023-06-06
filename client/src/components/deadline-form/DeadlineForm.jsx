import React from 'react';

const DeadlineForm = function () {

  return (
    <form className='deadlineForm'>
      <label>Task
        <input className='formTaskInput'/>
      </label>
      <label>Summary
        <textarea className='formSummaryInput'/>
      </label>
      <label>Date
        <input type='date'/>
      </label>
      <input type='submit' value='Submit'/>
    </form>
  )
}

export default DeadlineForm;