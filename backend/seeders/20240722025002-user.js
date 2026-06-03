'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [{
      fullname: "Admin Admin",
      username: 'admin',
      email: 'admin@admin.com',
      password: '$2y$10$WGCyK6Abg3bWSiFKpU6e1u5ts52yBiKGsPeTUEUHFOs2dNYq7tGKu', // bcrypt hash for 'password'
      user_type: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', { username: 'admin' }, {});
  }
};
