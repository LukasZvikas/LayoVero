const GameQuestions = require("../models/gameSchema");

exports.sendQuestions = async (req, res, next) => {
  const reqRound = req.body.round;
  const questions = await GameQuestions.find(
    { round: reqRound },
    (err, arr) => {
      console.log(err);
      if (err) {
        return next(err);
      }
      console.log("ARRAY_LENGTH", arr.length);

      res.send(arr);
    }
  );

  //res.send(questions);
};
