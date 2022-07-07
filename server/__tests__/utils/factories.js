const { factory } = require("factory-girl");
const { User, Task } = require("../../src/app/models");
const { faker } = require("@faker-js/faker");

factory.define("User", User, {
	username: faker.name.findName(),
	password: faker.internet.password(),
});

factory.define("Task", Task, {
	title: "random title",
	description: "random decription",
	category: "randomCategory",
	date_task: new Date(),
	completed: true,
	user_id: 1,
});

module.exports = factory;
