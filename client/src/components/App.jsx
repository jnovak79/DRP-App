import React, { useState } from 'react';
import DeadlinesList from './deadlines/DeadlinesList.jsx';
import DeadlineForm from './deadline-form/DeadlineForm.jsx';
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
      Date: 'Feb 31st 2099'
    },
    {
      Task: 'Placeholder2',
      Summary: 'Placeholder2 Summary',
      Date: 'March 32st 2099'
    }
  ])

  axios.get('/tasks')
    .then((result) => {
    })

  return (
    <div>
      <Header />
      <DeadlinesList deadlines={deadlines}/>
      <ResourcesList />
      <DeadlineForm />
      <CompletedList />
    </div>
  )
}

export default App;