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

controllers.addLinks = function (data) {
  return db.Links.create({

  });
}

controllers.getLinks = function () {
  return db.Links.find();
}

controllers.deleteAll = function () {
  return db.Tasks.deleteMany()
}

module.exports = controllers;