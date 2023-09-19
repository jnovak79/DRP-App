import React from 'react';
import InnerResourcesList from './InnerResourcesList.jsx';

const ResourcesList = function ({URLLinks, linkFiller}) {

  return (
    <section className='resourcesList'>
      <span>Resources</span>
      <InnerResourcesList URLLinks={URLLinks} linkFiller={linkFiller}/>
    </section>
  )
}

export default ResourcesList;