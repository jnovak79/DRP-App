import React from 'react';
import CompletedInnerList from './CompletedInnerList.jsx';

const CompletedList = function ({deadlines, taskListFiller}) {

  return (
    <section className='completedList'>
      Completed List
      <CompletedInnerList deadlines={deadlines} taskListFiller={taskListFiller}/>
    </section>
  )
}

export default CompletedList;