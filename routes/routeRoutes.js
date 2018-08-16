const mongoose = require("mongoose");
const routeController = require("../controllers/routeController");

module.exports = app => {
	app.post("/user/getPartial", routeController.getCity);
};
