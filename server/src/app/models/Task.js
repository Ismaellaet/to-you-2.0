module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define(
		"Task",
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			category: DataTypes.STRING,
			date_task: DataTypes.DATE,
			completed: DataTypes.BOOLEAN,
		},
		{
			timestamps: false,
		}
	);

	return Task;
};
