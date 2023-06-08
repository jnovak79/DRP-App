import React from 'react';
import ResourcesForm from './ResourcesForm.jsx';

const ResourcesFormHolder = function ({setURLLinks, linkFiller}) {

  return (
    <section className='deadlineFormHolder'>
      <span className='formHeader'>Add a New Resource</span>
      <ResourcesForm setURLLinks={setURLLinks} linkFiller={linkFiller}/>
    </section>
  )
}

export default ResourcesFormHolder;