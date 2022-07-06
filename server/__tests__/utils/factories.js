const { factory } = require("factory-girl");
const { User, Task } = require("../../src/app/models");
const { faker } = require("@faker-js/faker");

factory.define("User", User, {
	username: faker.name.findName(),
	password: faker.internet.password(),
});

factory.define("Task", Task, {
	title: faker.random.words(3),
	description: faker.lorem.sentences(1),
	category: faker.word.noun(),
	date_task: new Date(),
	completed: faker.datatype.boolean(),
	user_id: 1,
});

module.exports = factory;
