'use strict';
module.exports = function(app) {
  var question = require('../controllers/mathDailyPuzzleController');

  // question Routes
  app.route('/questions')
    .get(question.get_all_questions)
    .post(question.create_a_question);

  app.route('/questions/:questionDate')
    .get(question.retrieve_a_question)
    .put(question.update_a_question)
    .delete(question.delete_a_question);
};
