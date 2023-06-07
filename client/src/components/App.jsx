import React, { useState, useEffect } from 'react';
import DeadlinesList from './deadlines/DeadlinesList.jsx';
import DeadlineFormHolder from './deadline-form/DeadlineFormHolder.jsx';
import CompletedList from './completed/CompletedList.jsx';
import ResourcesList from './resources/ResourcesList.jsx';
import Header from './Header.jsx';
import axios from 'axios';
import Nuclear from './Nuclear.jsx';

// PLACEHOLDER DATA UNTIL RESPONSE FROM DB IN DEADLINES FIRST STATE

const App = function () {

  const [deadlines, setDeadlines] = useState([])

  let listFiller = function () {
    axios.get('/tasks')
    .then((result) => {
      setDeadlines(result.data);
    })
    .catch((err) => {
      console.log('Error retrieving')
    })
  }

  useEffect (function () {
    listFiller()
  }, [])

  return (
    <div>
      <Header />
      <DeadlinesList deadlines={deadlines} listFiller={listFiller}/>
      <ResourcesList />
      <DeadlineFormHolder setDeadlines={setDeadlines}/>
      <CompletedList deadlines={deadlines} listFiller={listFiller}/>
    </div>
  )

}

export default App;