const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Place = db.model('place')

describe('Place routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  beforeEach(() => {
    const places = [
      {
        name: 'Bar',
        location: '123 W Street St. Chicago, Il',
        noise: 4
      },
      {
        name: 'Restaurant',
        location: '500 W Street St. Chicago, Il',
        noise: 1
      }
    ]
    return Place.bulkCreate(places)
  })

  describe('/api/places', () => {

    it('Get /api/places', () => {
      return request(app)
        .get('/api/places')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal('Bar')
        })
    })
  })
  describe('/api/places/:id', () => {

    it('Get /api/places/:id', () => {
      return request(app)
        .get(`/api/places/${2}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.name).to.be.equal('Restaurant')
          expect(res.body.noise).to.be.equal('1')
        })
    })
  })
})