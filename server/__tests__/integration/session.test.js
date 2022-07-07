const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../utils/factories");

describe("Authentication", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should register a user in a database", async () => {
		const response = await request(app).post("/register").send({
			username: "randomUsername",
			password: "randompassword",
		});

		expect(response.statusCode).toBe(200);
	});

	it("should authenticate with valid credentials", async () => {
		const user = await factory.create("User");

		const response = await request(app).post("/login").send({
			username: user.username,
			password: user.password,
		});

		expect(response.status).toBe(200);
	});

	it("should NOT authenticate with invalid username", async () => {
		const user = await factory.create("User");

		const response = await request(app).post("/login").send({
			username: "wrongUsername",
			password: user.password,
		});

		expect(response.status).toBe(401);
	});

	it("should NOT authenticate with invalid password", async () => {
		const user = await factory.create("User");

		const response = await request(app).post("/login").send({
			username: user.username,
			password: "wrongpassword",
		});

		expect(response.status).toBe(401);
	});

	it("should get JWT token when authenticated", async () => {
		const user = await factory.create("User");

		const response = await request(app).post("/login").send({
			username: user.username,
			password: user.password,
		});

		expect(response.body).toHaveProperty("token");
	});

	it("should be able to access private routes with jwt token", async () => {
		const user = await factory.create("User");

		const response = await request(app)
			.get("/task/list")
			.set("Authorization", `Bearer ${user.generateToken()}`);

		expect(response.status).toBe(200);
	});

	it("should NOT be able to access private routes WITHOUT jwt token", async () => {
		const user = await factory.create("User");

		const response = await request(app).get("/task/list");

		expect(response.status).toBe(401);
	});
});
