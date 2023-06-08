import React from 'react';
import axios from 'axios';

const CompleteButton = function ({deadline, taskListFiller}) {

  let handleClick = function () {
    axios.put('/tasks', null, {
      params: {
        id: deadline._id,
        completed: true
      }
    })
      .then((response) => {
        taskListFiller();
      })
      .catch((err) => {
        return;
      })
  }

  return (
    <div>
      <button onClick={handleClick}>Complete</button>
    </div>
  )
}

export default CompleteButton;
