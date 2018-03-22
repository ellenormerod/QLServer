const {expect} = require('chai')
const db = require('../index')
const Review = db.model('review')

describe('Review model', () => {
  describe('properties', () => {
    it('should have a noise level', () => {
      expect(Review.attributes.noise).to.be.an('object')
    })
  })
})
