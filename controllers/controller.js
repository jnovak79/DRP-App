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

controllers.deleteTask = function (data) {
  return db.Tasks.deleteOne({_id : data.id});
}

controllers.getLinks = function () {
  return db.Links.find();
}

controllers.addLinks = function (data) {
  return db.Links.create({
    task_id: data.task_id,
    Description: data.Description,
    url: data.url
  });
}

controllers.deleteLink = function (data) {
  return db.Links.deleteOne({_id: data.id});
}

controllers.deleteAll = function () {
  return db.Tasks.deleteMany()
}

controllers.deleteAllUrls = function () {
  return db.Links.deleteMany()
}

module.exports = controllers;