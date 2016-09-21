// Remove the error when complete..
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/todo-app');

 var Person = require('./models/person');

 var Todo = require('./todo');

 exports.Todo = Todo;

// var helpfulError = new Error("FIRST CREATE A TODO MODEL & REQUIRE IT IN INDEX.JS!");
// throw helpfulError;
