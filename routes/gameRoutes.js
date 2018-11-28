const gameController = require("../controllers/gameController");

module.exports = app => {
  app.post("/game/getRoundCity", gameController.sendQuestions);

  app.post("/game/saveScore", gameController.saveScore);

  app.post("/game/getReff", gameController.sendRefferalCode);
};
