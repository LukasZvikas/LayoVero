const gameController = require("../controllers/gameController");

module.exports = app => {
  app.post("/game/getRoundCity", gameController.sendQuestions);
};
