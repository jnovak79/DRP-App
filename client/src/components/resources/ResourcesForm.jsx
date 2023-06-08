import React from 'react';
import axios from 'axios';

const ResourcesForm = function ({setDeadlines}) {

  let handleSubmit = function (e) {
    e.preventDefault();
    let Description = e.target[0].value;
    let url = e.target[1].value;
    axios.post('/resources', {
      Description: Description,
      url: url,
      task_id: 1
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
      <label>Description
        <input className='formTaskInput'/>
      </label>
      <label>URL
        <textarea className='formSummaryInput'/>
      </label>
      <input className='taskSubmit' type='submit' value='Add Resource'/>
    </form>
  )
}

export default ResourcesForm;