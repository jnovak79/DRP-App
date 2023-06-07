import React from 'react';

const DeadlineEntry = function ({deadline}) {

  return (
    <section className='taskEntry'>
      <div className='taskEntryBody'>
        <h3 className='taskTitle'>
          Task
        </h3>
        <h3>
        {deadline.Task}
        </h3>
        <div>
          <h4>
            Summary
          </h4>
          {deadline.Summary}
        </div>
      </div>
      <div className='taskEntryDate'>
        Due on {deadline.Date}
      </div>
    </section>
  )
}

export default DeadlineEntry;