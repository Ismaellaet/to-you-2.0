const request = require("supertest");

const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

const RANDOM_USERNAME = "randomUsername";
const RANDOM_PASSWORD = "randompassword";

describe("Authentication", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should authenticate with valid credentials", async () => {
		const user = await User.create({
			username: RANDOM_USERNAME,
			password: RANDOM_PASSWORD,
		});

		const response = await request(app).post("/login").send({
			username: RANDOM_USERNAME,
			password: RANDOM_PASSWORD,
		});

		expect(response.status).toBe(200);
	});
});
