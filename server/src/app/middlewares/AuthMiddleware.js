const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	const { authorization } = req.headers;

	if (authorization) {
		return next();
	}
};
