import React from 'react';
import CompletedEntry from './CompletedEntry.jsx';

const CompletedInnerList = function ({deadlines, taskListFiller}) {


  return (
    <div className='innerList'>
      {deadlines.map(function(deadline, index) {
        if (deadline.Completed) {
          return <CompletedEntry deadline={deadline} key={index} taskListFiller={taskListFiller}/>
        }
      })}
    </div>
  )
}

export default CompletedInnerList;