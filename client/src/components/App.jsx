import React, { useState, useEffect } from 'react';
import DeadlinesList from './deadlines/DeadlinesList.jsx';
import DeadlineFormHolder from './deadline-form/DeadlineFormHolder.jsx';
import CompletedList from './completed/CompletedList.jsx';
import ResourcesList from './resources/ResourcesList.jsx';
import Header from './Header.jsx';
import axios from 'axios';
import ResourcesFormHolder from './resources/ResourcesFormHolder.jsx';
import Nuclear from './Nuclear.jsx';

const App = function () {

  const [deadlines, setDeadlines] = useState([])

  let taskListFiller = function () {
    axios.get('/tasks')
    .then((result) => {
      setDeadlines(result.data);
    })
    .catch((err) => {
      console.log('Error retrieving')
    })
  }

  let linkFiller = function () {
    axios.get('/')
  }

  useEffect (function () {
    taskListFiller()
  }, [])

  const [nuke, setNuke] = useState(false)

  if (!nuke) {
  return (
    <div>
      <Header />
      <DeadlinesList deadlines={deadlines} taskListFiller={taskListFiller}/>
      <ResourcesList />
      <DeadlineFormHolder setDeadlines={setDeadlines}/>
      <ResourcesFormHolder setDeadlines={setDeadlines}/>
      <CompletedList deadlines={deadlines} taskListFiller={taskListFiller}/>
      <Nuclear setNuke={setNuke}/>
    </div>
  )
  } else {
    return (
      <div className='NukePage'>
        🗿
      </div>
    )
  }

}

export default App;