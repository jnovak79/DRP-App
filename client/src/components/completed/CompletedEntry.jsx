import React from 'react';
import BackToTasksButton from './BackToTasksButton.jsx';

const CompletedEntry = function ({deadline, listFiller}) {

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
        Was due on {deadline.Date}
        <BackToTasksButton deadline={deadline} listFiller={listFiller}/>
      </div>
    </section>
  )
}

export default CompletedEntry;