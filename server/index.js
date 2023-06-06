const express = require('express');
const path = require('path');
const controllers = require('../controllers/controller.js');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/tasks', (req, res) => {
  res.status(200).send('It works');
})

let port = 3100;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});