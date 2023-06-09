import React from 'react';

const Nuclear = function ({setNuke}) {

  let handleNuke = function () {
    setNuke(true);
  }

  return (
    <div className='Nuclear'>
      <button onClick={handleNuke}>Nuke the Server</button>
    </div>
  )
}

export default Nuclear;


// Instructions
// Add this to the import in App.jsx
// -  import Nuclear from './Nuclear.jsx';
// Add this to bottom
// -  <Nuclear setNuke={setNuke}/>
// Replace right above the return with this wrapper
/*
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
*/

// Add this to the CSS
/*
@keyframes colorChange {
  0% {
    background-color: red;
  }
  50% {
    background-color: rgb(177, 96, 96);
  }
  100% {
    background-color: red;
  }
}

.Nuclear button {
  background-color: white;
  animation: colorChange 2s infinite;
  margin: 3%;
  height: 10em;
  border-radius: 50%;
  font-weight: bold;
}

.Nuclear button:hover {
  color: white;
}

.NukePage {
  font-size: 20em;
  text-align: center;
}
*/
