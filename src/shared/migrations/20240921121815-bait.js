'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.createTable('bait', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      meliponicultor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'meliponicultor', 
          key: 'id' 
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE' 
      },
      ml_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bee_specie: {
        type: Sequelize.STRING,
        allowNull: false
      },
      installation_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      capture_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      allowed_transfer: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.dropTable('bait');
  }
};
