import React from 'react';
import CompleteButton from './CompleteButton.jsx';
import DeleteButton from './DeleteButton.jsx';

const DeadlineEntry = function ({deadline, taskListFiller}) {

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
        <CompleteButton deadline={deadline} taskListFiller={taskListFiller}/>
        <DeleteButton deadline={deadline} taskListFiller={taskListFiller}/>
      </div>
    </section>
  )
}

export default DeadlineEntry;