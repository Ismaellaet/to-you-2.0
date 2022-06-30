const routes = require("express").Router();

const SessionController = require("./app/controllers/SessionController");

routes.post("/login", SessionController.login);
module.exports = routes;
