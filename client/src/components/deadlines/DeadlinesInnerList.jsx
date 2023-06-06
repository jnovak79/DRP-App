import React from 'react';
import DeadlineEntry from './DeadlineEntry.jsx';

const DeadlinesInnerList = function ({deadlines}) {


  return (
    <div className='innerList'>
      {deadlines.map(function(deadline, index) {
        return <DeadlineEntry deadline={deadline} key={index}/>
      })}
    </div>
  )
}

export default DeadlinesInnerList;