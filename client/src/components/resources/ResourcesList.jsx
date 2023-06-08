import React from 'react';
import InnerResourcesList from './InnerResourcesList.jsx';

const ResourcesList = function ({URLLinks}) {

  return (
    <section className='resourcesList'>
      <span>Resources</span>
      <InnerResourcesList URLLinks={URLLinks}/>
    </section>
  )
}

export default ResourcesList;