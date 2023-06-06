import React, { useState, useEffect } from 'react';
import DeadlinesList from './deadlines/DeadlinesList.jsx';
import DeadlineFormHolder from './deadline-form/DeadlineFormHolder.jsx';
import CompletedList from './completed/CompletedList.jsx';
import ResourcesList from './resources/ResourcesList.jsx';
import Header from './Header.jsx';
import axios from 'axios';

// PLACEHOLDER DATA UNTIL RESPONSE FROM DB IN DEADLINES FIRST STATE

const App = function () {

  const [deadlines, setDeadlines] = useState([
    {
      Task: 'Placeholder',
      Summary: 'Placeholder Summary',
      Date: 'Feb 31st 2099',
      Completed: false
    },
    {
      Task: 'Placeholder2',
      Summary: 'Placeholder2 Summary',
      Date: 'March 32st 2099',
      Completed: false
    },
    {
      Task: 'Placeholder3',
      Summary: 'Placeholder3 Summary',
      Date: 'May 21st 2100',
      Completed: true
    }
  ])

  useEffect (function () {
    axios.get('/tasks')
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log('Error retrieving')
    })
  }, [])


  return (
    <div>
      <Header />
      <DeadlinesList deadlines={deadlines}/>
      <ResourcesList />
      <DeadlineFormHolder />
      <CompletedList />
    </div>
  )
}

export default App;