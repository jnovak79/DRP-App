import React from 'react';
import axios from 'axios';

const CompleteButton = function ({deadline, taskListFiller}) {

  let handleClick = function () {
    axios.delete('/tasks', {
      params: {
        id: deadline._id,
      }
    })
      .then((response) => {
        taskListFiller();
        return;
      })
      .catch((err) => {
        return;
      })
  }

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default CompleteButton;