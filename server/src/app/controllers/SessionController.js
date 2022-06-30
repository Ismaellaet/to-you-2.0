const { User } = require("../models");

class SessionController {
	async login(req, res) {
		const { username, password } = req.body;

		const user = await User.findOne({
			where: { username },
		});

		if (!user) {
			return res.status(401).json({
				message: "Invalid username or password!",
			});
		}

		return res.status(200).json({
			user,
		});
	}
}

module.exports = new SessionController();
