const routes = require("express").Router();

const AuthMiddleware = require("./app/middlewares/AuthMiddleware");
const SessionController = require("./app/controllers/SessionController");

routes.post("/login", SessionController.login);

routes.post("/register", SessionController.register);

routes.use(AuthMiddleware);

routes.get("/home", (req, res) => res.status(200).send());
module.exports = routes;
