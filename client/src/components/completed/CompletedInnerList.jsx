import React from 'react';
import CompletedEntry from './CompletedEntry.jsx';

const CompletedInnerList = function ({deadlines, listFiller}) {


  return (
    <div className='innerList'>
            {deadlines.map(function(deadline, index) {
        if (deadline.Completed) {
          return <CompletedEntry deadline={deadline} key={index} listFiller={listFiller}/>
        }
      })}
    </div>
  )
}

export default CompletedInnerList;