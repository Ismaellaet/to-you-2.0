const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should encrypt user password", async () => {
		const user = await User.create({
			username: "randomUsername",
			password: "randompassword",
		});

		const compareHash = await bcrypt.compare(
			"randompassword",
			user.password_hash
		);

		expect(compareHash).toBe(true);
	});
});
