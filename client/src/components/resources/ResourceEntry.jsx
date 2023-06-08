import React from 'react';

const ResourceEntry = function ({link}) {

  return (
    <section className='taskEntry'>
      <div className='taskEntryBody'>
        <h3 className='taskTitle'>
          Description
        </h3>
        <h3>
        {link.Description}
        </h3>
        <div>
          <h4>
            URL
          </h4>
          {link.url}
        </div>
      </div>
    </section>
  )
}

export default ResourceEntry;