import React from 'react';
import InnerResourcesList from './InnerResourcesList.jsx';

const ResourcesList = function () {

  return (
    <section className='resourcesList'>
      Resources
      <InnerResourcesList />
    </section>
  )
}

export default ResourcesList;