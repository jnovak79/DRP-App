import React from 'react';
import axios from 'axios';

const CompleteButton = function ({link, linkFiller}) {

  let handleClick = function () {
    axios.delete('/resources', {
      params: {
        id: link._id,
      }
    })
      .then((response) => {
        linkFiller();
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