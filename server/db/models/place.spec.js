const {expect} = require('chai')
const db = require('../index')
const Place = db.model('place')

describe('Place model', () => {
  describe('properties', () => {
    it('should have a name', () => {
      expect(Place.attributes.name).to.be.an('object')
      expect(Place.attributes.name.allowNull).to.equal(false)
    })
    it('should have a location', () => {
      expect(Place.attributes.location).to.be.an('object')
      expect(Place.attributes.location.allowNull).to.equal(false)
    })
  })
})
