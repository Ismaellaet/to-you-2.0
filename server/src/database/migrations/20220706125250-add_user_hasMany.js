"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("tasks", "users_id", {
			type: Sequelize.INTEGER,
			references: {
				model: "users",
				key: "id",
			},
			onDelete: "CASCADE",
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn("tasks", "users_id");
	},
};
