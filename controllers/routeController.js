const Routes = require("../models/routesSchema");

exports.getCity = async (req, res, next) => {
	const letters = req.body.partialQuery;
	console.log(letters);

	Routes.find({ city: { $regex: letters, $options: "i" } }, (err, routes) => {
		if (err) {
			return next(err);
		}

		const cities = routes.map(route => {
			return route.city;
		});

		console.log(cities)
		res.send(cities);
	});
};
