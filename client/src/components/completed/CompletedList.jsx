import React from 'react';
import CompletedInnerList from './CompletedInnerList.jsx';

const CompletedList = function () {

  return (
    <section className='completedList'>
      Completed List
      <CompletedInnerList />
    </section>
  )
}

export default CompletedList;