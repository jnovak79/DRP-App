import React from 'react';
import DeadlinesInnerList from './DeadlinesInnerList.jsx';

const DeadlinesList = function ({deadlines, listFiller}) {

  return (
    <section className='deadlinesList'>
      Deadlines
      <DeadlinesInnerList deadlines={deadlines} listFiller={listFiller}/>
    </section>
  )
}

export default DeadlinesList;