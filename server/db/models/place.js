const Sequelize = require('sequelize')
const db = require('../db')

const Place = db.define('place', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  noise: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Place
