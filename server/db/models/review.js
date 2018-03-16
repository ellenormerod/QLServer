const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title:{
    type: Sequelize.STRING
  },
  comments: {
    type: Sequelize.TEXT
  },
  noise: {
    type: Sequelize.INTEGER
  }
})

module.exports = Review
