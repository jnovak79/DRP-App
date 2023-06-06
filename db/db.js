const mongoose = require("mongoose");
mongoose.pluralize(null);

mongoose.connect('mongodb://localhost:27017/DRP');

const TasksSchema = new mongoose.Schema({
  Task: {type: String, required: true},
  Summary: {type: String, required: true},
  Date: {type: String, required: true}
})

const LinksSchema = new mongoose.Schema({
  task_id: {type: String, required: true},
  Title: {type: String, required: true},
  url: {type:String, required: true}
})

const Tasks = mongoose.model('Tasks', TasksSchema);

const Links = mongoose.model('Links', LinksSchema);

module.exports.Tasks = Tasks;
module.exports.Links = Links;

