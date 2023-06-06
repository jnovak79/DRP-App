import React from 'react';

const DeadlineEntry = function ({deadline}) {

  return (
    <div>
      Task: {deadline.Task}
      Summary: {deadline.Summary}
      Date: {deadline.Date}
    </div>
  )
}

export default DeadlineEntry;