const routes = require("express").Router();

const AuthMiddleware = require("./app/middlewares/AuthMiddleware");
const SessionController = require("./app/controllers/SessionController");

routes.post("/login", SessionController.login);

routes.post("/register", SessionController.register);

routes.use(AuthMiddleware);

routes.get("/home", (req, res) =>
	res.json([
		{
			id: 1,
			title: "Do Math Homework",
			description: "Do chapter 2 to 5 for next week",
			category: "university",
			date_task: new Date(),
			completed: true,
		},
		{
			id: 2,
			title: "Tack out dogs",
			description: "",
			category: "home",
			date_task: new Date(),
			completed: false,
		},
		{
			id: 3,
			title: "Work out",
			description: "",
			category: "sport",
			date_task: new Date(),
			completed: true,
		},
	])
);

module.exports = routes;
