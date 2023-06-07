const express = require('express');
const path = require('path');
const controllers = require('../controllers/controller.js');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

controllers.deleteAll()
  .then((result) => {
    console.log('Database cleared')
  })
  .catch((err) => {
    console.log('Error clearing database')
  })

app.get('/tasks', (req, res) => {
  controllers.getTasks()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send('error retrieving tasks');
    })
})

app.post('/tasks', (req, res) => {
  controllers.addTasks(req.body)
    .then((result) => {
      controllers.getTasks()
        .then((result) => {res.status(200).send(result);})
        .catch((err) => {res.status(500).send('error updating tasks');})
    })
    .catch((err) => {res.status(500).send('error adding tasks');})
})

let port = 3100;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});