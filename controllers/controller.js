const db = require ('../db/db.js')

const controllers = {};

controllers.getTasks = function (req, res) {
  db.Tasks.find()
    .then((result) => {
      console.log(result);
      res.send(200).send('Success');
    })
    .catch((err) => {
      res.status(500).send('error retrieving tasks');
    })
}

controllers.addTasks = function (req, res) {
  db.Tasks.create({
    Task: 'Task',
    Summary: 'Summary',
    Date: 'Date'
  })
  .then((result) => {
    console.log(result);
    res.send(200).send('Task Added')
  })
  .catch((err) => {
    res.status(500).send('error adding task')
  })
}

controllers.addLinks;

controllers.getLinks;

module.exports = controllers;