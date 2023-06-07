const db = require ('../db/db.js')

const controllers = {};

controllers.getTasks = function () {
  return db.Tasks.find()
}

controllers.addTasks = function (data) {
  return db.Tasks.create({
    Task: data.Task,
    Summary: data.Summary,
    Date: data.Date,
    Completed: false
  })
}

controllers.addLinks;

controllers.getLinks;

controllers.deleteAll = function () {
  return db.Tasks.deleteMany()
}

module.exports = controllers;