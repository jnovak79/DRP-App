import React from 'react';
import DeadlinesInnerList from './DeadlinesInnerList.jsx';

const DeadlinesList = function ({deadlines}) {

  return (
    <section className='deadlinesList'>
      Deadlines
      <DeadlinesInnerList deadlines={deadlines}/>
    </section>
  )
}

export default DeadlinesList;