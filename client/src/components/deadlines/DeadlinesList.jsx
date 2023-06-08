import React from 'react';
import DeadlinesInnerList from './DeadlinesInnerList.jsx';

const DeadlinesList = function ({deadlines, taskListFiller}) {

  return (
    <section className='deadlinesList'>
      <span>Deadlines</span>
      <DeadlinesInnerList deadlines={deadlines} taskListFiller={taskListFiller}/>
    </section>
  )
}

export default DeadlinesList;