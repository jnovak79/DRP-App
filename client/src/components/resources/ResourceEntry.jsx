import React from 'react';
import DeleteButton from './DeleteButton.jsx';

const ResourceEntry = function ({link, linkFiller}) {

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
        <div className='LinkEntryButton'>
          <DeleteButton link={link} linkFiller={linkFiller}/>
        </div>
    </section>
  )
}

export default ResourceEntry;