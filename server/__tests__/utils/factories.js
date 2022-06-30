const { factory } = require("factory-girl");
const { User } = require("../../src/app/models");
const { faker } = require("@faker-js/faker");

factory.define("User", User, {
	username: faker.name.findName(),
	password: faker.internet.password(),
});

module.exports = factory;
