import React from 'react';
import axios from 'axios';

const BackToTasksButton = function ({deadline, listFiller}) {

  let handleClick = function () {
    axios.put('/tasks', null, {
      params: {
        id: deadline._id,
        completed: false
      }
    })
      .then((response) => {
        listFiller();
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