import React from 'react';
import ResourcesForm from './ResourcesForm.jsx';

const ResourcesFormHolder = function ({setDeadlines}) {

  return (
    <section className='deadlineFormHolder'>
      Add a New Resource
      <ResourcesForm setDeadlines={setDeadlines}/>
    </section>
  )
}

export default ResourcesFormHolder;