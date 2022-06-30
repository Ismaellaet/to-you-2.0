"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		// Tasks Table
		await queryInterface.createTable("tasks", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
			},
			category: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			date_task: {
				type: Sequelize.DATE,
			},
			completed: {
				type: Sequelize.BOOLEAN,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("tasks");
	},
};
