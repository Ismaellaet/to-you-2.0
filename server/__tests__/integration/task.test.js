const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../utils/factories");

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
			.get("/home")
			.set("Authorization", `Bearer ${user.generateToken()}`);

		const isArray = Array.isArray(response.body);

		expect(isArray).toBe(true);
	});
});
