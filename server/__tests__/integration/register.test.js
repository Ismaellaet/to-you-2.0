const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");

const RANDOM_USERNAME = "randomUsername";
const RANDOM_PASSWORD = "randompassword";

describe("User Register", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should register a user in a database", async () => {
		const response = await request(app).post("/register").send({
			username: RANDOM_USERNAME,
			password: RANDOM_PASSWORD,
		});

		expect(response.statusCode).toBe(200);
	});
});
