"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("tasks", "user_id", {
			type: Sequelize.INTEGER,
			references: {
				model: "users",
				key: "id",
			},
			onDelete: "CASCADE",
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn("tasks", "user_id");
	},
};
