module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define(
		"Task",
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			category: DataTypes.STRING,
			date: DataTypes.STRING,
			completed: DataTypes.BOOLEAN,
		},
		{
			timestamps: false,
		}
	);

	return Task;
};
