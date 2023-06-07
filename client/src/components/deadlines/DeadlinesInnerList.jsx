import React from 'react';
import DeadlineEntry from './DeadlineEntry.jsx';

const DeadlinesInnerList = function ({deadlines, listFiller}) {

  return (
    <div className='innerList'>
      {deadlines.map(function(deadline, index) {
        if (!deadline.Completed) {
          return <DeadlineEntry deadline={deadline} key={index} listFiller={listFiller}/>
        }
      })}
    </div>
  )
}

export default DeadlinesInnerList;