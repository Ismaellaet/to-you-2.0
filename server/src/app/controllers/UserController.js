const { User } = require("../models");

class UserController {
	async register(req, res) {
		const { username, password } = req.body;

		const user = await User.create({
			username: username,
			password,
		});

		return res.status(200).json({
			user,
			token: user.generateToken(),
		});
	}
}

module.exports = new UserController();
