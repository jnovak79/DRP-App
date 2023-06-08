import React from 'react';
import ResourceEntry from './ResourceEntry.jsx';

const InnerResourcesList = function ({URLLinks}) {

  return (
    <section className='innerResourcesList'>
      {URLLinks.map(function(link, index) {
        return <ResourceEntry link={link} key={index} />
      })}
    </section>
  )
}

export default InnerResourcesList;