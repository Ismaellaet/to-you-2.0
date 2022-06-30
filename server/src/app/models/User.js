module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		username: DataTypes.STRING,
		password_hash: DataTypes.STRING,
	});

	return User;
};
