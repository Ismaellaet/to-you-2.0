const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			username: DataTypes.STRING,
			password: DataTypes.VIRTUAL,
			password_hash: DataTypes.STRING,
		},
		{
			hooks: {
				beforeSave: async user => {
					if (user.password) {
						user.password_hash = await bcrypt.hash(
							user.password,
							8
						);
					}
				},
			},
		}
	);

	User.associate = models => {
		User.hasMany(models.Task, {
			foreignKey: {
				name: "user_id",
				allowNull: false,
			},
		});
	};

	User.prototype.checkPassword = function (password) {
		return bcrypt.compare(password, this.password_hash);
	};

	User.prototype.generateToken = function () {
		return jwt.sign(
			{
				id: this.id,
			},
			process.env.APP_SECRET
		);
	};

	return User;
};
