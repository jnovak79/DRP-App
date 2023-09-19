import React from 'react';
import ResourceEntry from './ResourceEntry.jsx';

const InnerResourcesList = function ({URLLinks, linkFiller}) {

  return (
    <section className='innerResourcesList'>
      {URLLinks.map(function(link, index) {
        return <ResourceEntry link={link} key={index} linkFiller={linkFiller}/>
      })}
    </section>
  )
}

export default InnerResourcesList;