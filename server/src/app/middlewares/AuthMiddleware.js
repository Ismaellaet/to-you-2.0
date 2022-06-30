const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const jwtVerifyAsync = promisify(jwt.verify);

module.exports = async (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({
			message: "Unauthorized: Invalid token!",
		});
	}

	try {
		const [, token] = authorization.split(" ");
		const decoded = await jwtVerifyAsync(token, process.env.APP_SECRET);

		// Set userId for all controllers identify the user
		req.userId = decoded.id;

		return next();
	} catch (error) {
		return res
			.status(401)
			.json({ message: "Unauthorized: Invalid token!" });
	}
};
