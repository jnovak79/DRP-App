import React from 'react';
import CompleteButton from './CompleteButton.jsx';

const DeadlineEntry = function ({deadline, listFiller}) {

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
        <CompleteButton deadline={deadline} listFiller={listFiller}/>
      </div>
    </section>
  )
}

export default DeadlineEntry;