import React from 'react';
import axios from 'axios';

const DeadlineForm = function ({setDeadlines}) {

  let handleSubmit = function (e) {
    e.preventDefault();
    let task = e.target[0].value;
    let summary = e.target[1].value;
    let date = e.target[2].value;
    axios.post('/tasks', {
      Task: task,
      Summary: summary,
      Date: date,
      Completed: false
    })
      .then((result) => {
        setDeadlines(result.data);
        e.target[0].value = '';
        e.target[1].value = '';
      })
      .catch((err) => {
        return;
      })
  }

  return (
    <form className='deadlineForm' onSubmit={handleSubmit}>
      <label>Task
        <input className='formTaskInput'/>
      </label>
      <label>Summary
        <textarea className='formSummaryInput'/>
      </label>
      <label>Due Date
        <input type='date'/>
      </label>
      <input className='taskSubmit' type='submit' value='Add Task'/>
    </form>
  )
}

export default DeadlineForm;