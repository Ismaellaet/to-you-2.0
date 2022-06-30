const routes = require("express").Router();

const SessionController = require("./app/controllers/SessionController");
const AuthMiddleware = require("./app/middlewares/AuthMiddleware");

routes.post("/login", SessionController.login);

routes.use(AuthMiddleware);

routes.get("/home", (req, res) => res.status(200).send());
module.exports = routes;
