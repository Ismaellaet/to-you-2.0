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

	it("should NOT authenticate with invalid username", async () => {
		const user = await User.create({
			username: RANDOM_USERNAME,
			password: RANDOM_PASSWORD,
		});

		const response = await request(app).post("/login").send({
			username: "wrongUsername",
			password: RANDOM_PASSWORD,
		});

		expect(response.status).toBe(401);
	});

	it("should NOT authenticate with invalid password", async () => {
		const user = await User.create({
			username: RANDOM_USERNAME,
			password: RANDOM_PASSWORD,
		});

		const response = await request(app).post("/login").send({
			username: RANDOM_USERNAME,
			password: "wrongpassword",
		});

		expect(response.status).toBe(401);
	});

	it("should get JWT token when authenticated", async () => {
		const user = await User.create({
			username: RANDOM_USERNAME,
			password: RANDOM_PASSWORD,
		});

		const response = await request(app).post("/login").send({
			username: RANDOM_USERNAME,
			password: RANDOM_PASSWORD,
		});

		expect(response.body).toHaveProperty("token");
	});

	it("should be able to access private routes with jwt token", async () => {
		const user = await User.create({
			username: RANDOM_USERNAME,
			password: RANDOM_PASSWORD,
		});

		const response = await request(app)
			.get("/home")
			.set("Authorization", `Bearer ${user.generateToken()}`);

		expect(response.status).toBe(200);
	});

	it("should NOT be able to access private routes WITHOUT jwt token", async () => {
		const user = await User.create({
			username: RANDOM_USERNAME,
			password: RANDOM_PASSWORD,
		});

		const response = await request(app).get("/home");

		expect(response.status).toBe(401);
	});
});
