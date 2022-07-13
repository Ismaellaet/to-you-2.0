const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../utils/factories");

const TASK = {
	title: "random title",
	description: "random decription",
	category: "randomCategory",
	date_task: new Date(),
	completed: true,
};

describe("Tasks suit", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should return a task list by user id", async () => {
		const user = await factory.create("User");
		const task = await factory.create("Task", {
			user_id: user.id,
		});

		const response = await request(app)
			.get("/task/list")
			.set("Authorization", `Bearer ${user.generateToken()}`);

		const isArray = Array.isArray(response.body);

		expect(isArray).toBe(true);
	});

	it("should create an user task", async () => {
		const user = await factory.create("User");

		const response = await request(app)
			.post("/task/create")
			.set("Authorization", `Bearer ${user.generateToken()}`)
			.send(TASK);

		expect(response.body).toBe("Task created successfully!");
	});

	it("should update a task", async () => {
		const user = await factory.create("User");
		const task = await factory.create("Task", {
			user_id: user.id,
		});

		const response = await request(app)
			.put("/task/update")
			.set("Authorization", `Bearer ${user.generateToken()}`)
			.send({
				id: task.id,
				item: {
					completed: true,
				},
			});

		expect(response.body).toBe(`Task ${task.id} updated successfully!`);
	});
});
