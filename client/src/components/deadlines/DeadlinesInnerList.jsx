import React from 'react';
import DeadlineEntry from './DeadlineEntry.jsx';

const DeadlinesInnerList = function ({deadlines}) {


  return (
    <div className='innerList'>
      Inner List
      {deadlines.map(function(deadline) {
        return <DeadlineEntry deadline={deadline}/>
      })}
    </div>
  )
}

export default DeadlinesInnerList;