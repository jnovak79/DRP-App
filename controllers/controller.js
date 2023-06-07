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

controllers.completeTask = function (params) {
  return db.Tasks.findOneAndUpdate({_id: params.id},
    {Completed: params.completed})
}

controllers.addLinks;

controllers.getLinks;

controllers.deleteAll = function () {
  return db.Tasks.deleteMany()
}

module.exports = controllers;