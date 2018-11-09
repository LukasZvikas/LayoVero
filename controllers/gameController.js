const GameQuestions = require("../models/gameSchema");

exports.sendQuestions = async (req, res, next) => {
	console.log("HERE")
  const reqCity = req.body.city;
  console.log("REQ", reqCity);
  const questions = await GameQuestions.find({city: reqCity}, ( err, arr) => {
  	console.log(err)
    if (err) {
      console.log("ERROR", err);
      return next(err);
    }
    console.log("arr", arr)
 
    res.send(arr);
  });

  //res.send(questions);
};
