const { User } = require("../models");

class TaskController {
	async list(req, res) {
		const user = await User.findOne({
			where: {
				id: req.userId,
			},
		});

		const tasks = await user.getTasks();

		return res.status(200).json(tasks);
	}
}

module.exports = new TaskController();
