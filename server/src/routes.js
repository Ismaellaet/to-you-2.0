const routes = require("express").Router();

const AuthMiddleware = require("./app/middlewares/AuthMiddleware");
const SessionController = require("./app/controllers/SessionController");
const TaskController = require("./app/controllers/TaskController");

routes.post("/login", SessionController.login);

routes.post("/register", SessionController.register);

routes.use(AuthMiddleware);

routes.get("/home", TaskController.list);

routes.post("/home", TaskController.create);

module.exports = routes;
