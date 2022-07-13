const routes = require("express").Router();

const AuthMiddleware = require("./app/middlewares/AuthMiddleware");
const SessionController = require("./app/controllers/SessionController");
const TaskController = require("./app/controllers/TaskController");

routes.post("/login", SessionController.login);

routes.post("/register", SessionController.register);

routes.use(AuthMiddleware);

routes.get("/task/list", TaskController.list);

routes.post("/task/create", TaskController.create);

routes.post("/task/update", TaskController.update);

module.exports = routes;
