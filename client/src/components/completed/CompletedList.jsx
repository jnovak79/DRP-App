import React from 'react';
import CompletedInnerList from './CompletedInnerList.jsx';

const CompletedList = function ({deadlines, listFiller}) {

  return (
    <section className='completedList'>
      Completed List
      <CompletedInnerList deadlines={deadlines} listFiller={listFiller}/>
    </section>
  )
}

export default CompletedList;