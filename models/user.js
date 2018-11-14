var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  class: String,
  age: Number,
  email: String
})

module.exports = mongoose.model('User',UserSchema);