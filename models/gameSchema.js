const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameQuestionSchema = new Schema({
  _id: String,
  city: String,
  question: String,
  primaryText: String,
  specialWord: String,
  answers: [
    {
      title: String,
      image: String,
      correct: Boolean,
      status: Boolean
    }
  ]
});

const gameQuestionModel = mongoose.model("gameQuestions", gameQuestionSchema, "gameQuestions");

module.exports = gameQuestionModel;
