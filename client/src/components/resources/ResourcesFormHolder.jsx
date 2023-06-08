import React from 'react';
import ResourcesForm from './ResourcesForm.jsx';

const ResourcesFormHolder = function ({setURLLinks, linkFiller}) {

  return (
    <section className='deadlineFormHolder'>
      Add a New Resource
      <ResourcesForm setURLLinks={setURLLinks} linkFiller={linkFiller}/>
    </section>
  )
}

export default ResourcesFormHolder;