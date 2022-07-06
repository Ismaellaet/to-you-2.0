const { User, Task } = require("../models");

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

	async create(req, res) {
		const infoTasks = req.body;

		try {
			const task = await Task.create({
				...infoTasks,
				user_id: req.userId,
			});

			return res.json("Task created successfully!");
		} catch (error) {
			console.error(error);
		}
	}
}

module.exports = new TaskController();
