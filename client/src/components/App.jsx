import React, { useState, useEffect } from 'react';
import DeadlinesList from './deadlines/DeadlinesList.jsx';
import DeadlineFormHolder from './deadline-form/DeadlineFormHolder.jsx';
import CompletedList from './completed/CompletedList.jsx';
import ResourcesList from './resources/ResourcesList.jsx';
import Header from './Header.jsx';
import axios from 'axios';
import ResourcesFormHolder from './resources/ResourcesFormHolder.jsx';

const App = function () {

  const [deadlines, setDeadlines] = useState([]);
  const [URLLinks, setURLLinks] = useState([]);

  let taskListFiller = function () {
    axios.get('/tasks')
      .then((result) => {
        setDeadlines(result.data);
      })
      .catch((err) => {
        console.log('Error retrieving tasks')
      })
  }

  let linkFiller = function () {
    axios.get('/resources')
      .then((result) => {
        setURLLinks(result.data);
      })
      .catch((err) => {
        console.log('Error retrieving links')
      })
  }

  useEffect (function () {
    linkFiller();
  }, [])

  useEffect (function () {
    taskListFiller()
  }, [])


  const [nuke, setNuke] = useState(false)

  if (!nuke) {
  return (
    <div>
      <Header />
      <DeadlinesList deadlines={deadlines} taskListFiller={taskListFiller}/>
      <ResourcesList URLLinks={URLLinks}/>
      <DeadlineFormHolder setDeadlines={setDeadlines}/>
      <ResourcesFormHolder setURLLinks={setURLLinks} linkFiller={linkFiller}/>
      <CompletedList deadlines={deadlines} taskListFiller={taskListFiller}/>
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