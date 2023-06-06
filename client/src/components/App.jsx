import React from 'react';
import DeadlinesList from './deadlines/DeadlinesList.jsx';
import DeadlineForm from './deadline-form/DeadlineForm.jsx';
import CompletedList from './completed/CompletedList.jsx';
import ResourcesList from './resources/ResourcesList.jsx';
import Header from './Header.jsx';

const App = function () {

  return (
    <div>
      <Header />
      <DeadlinesList />
      <ResourcesList />
      <DeadlineForm />
      <CompletedList />
    </div>
  )
}

export default App;