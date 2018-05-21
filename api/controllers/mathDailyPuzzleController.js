'use strict';

var mongoose = require('mongoose'),
  Question = mongoose.model('Question');

exports.get_all_questions = function(req, res) {
  Question.find({}, function(err, questions) {
    if (err)
      res.send(err);
    res.json(questions);
  });
};

exports.create_a_question = function(req, res) {
  var new_question = new Question({
    questionDate: req.body.questionDate,
    questionText: req.body.questionText
  });

  new_question.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.retrieve_a_question = function(req, res) {
  Question.findById(req.params.questionDate, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

exports.update_a_question = function(req, res) {
  Question.findOneAndUpdate({_id: req.params.questionDate}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.delete_a_question = function(req, res) {
  Question.remove({
    questionDate: req.params.questionDate
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Question successfully deleted' });
  });
};
