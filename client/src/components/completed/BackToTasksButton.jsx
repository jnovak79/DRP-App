import React from 'react';
import axios from 'axios';

const BackToTasksButton = function ({deadline, taskListFiller}) {

  let handleClick = function () {
    axios.put('/tasks', null, {
      params: {
        id: deadline._id,
        completed: false
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
      <button onClick={handleClick}>Return to Tasks</button>
    </div>
  )
}

export default BackToTasksButton;