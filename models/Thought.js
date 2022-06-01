const { Schema, model } = require('mongoose');

// import date format function
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (dateInput) => dateFormat(dateInput)
  },
  username: {
      type: String,
      required: true
  },
  reactions: {

  }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;