import React from 'react';
import DeadlineEntry from './DeadlineEntry.jsx';

const DeadlinesInnerList = function ({deadlines, taskListFiller}) {

  return (
    <div className='innerList'>
      {deadlines.map(function(deadline, index) {
        if (!deadline.Completed) {
          return <DeadlineEntry deadline={deadline} key={index} taskListFiller={taskListFiller}/>
        }
      })}
    </div>
  )
}

export default DeadlinesInnerList;