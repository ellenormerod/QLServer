const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Review = db.model('review')
const Place = db.model('place')

describe('Review routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/reviews', () => {
    beforeEach(() => {
      return Review.create({
        title: 'Great Bar',
        comments: 'Enjoyed this bar.',
        noise: 4
      })
    })

    it('Post /api/reviews', () => {
      return request(app)
        .post('/api/reviews')
        .send({
          title: 'What a lovely restaurant',
          comments: 'Noise level was super good.',
          noise: 1,
        })
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.title).to.be.equal('What a lovely restaurant')
          expect(res.body.noise).to.be.equal(1)
        })
    })
  })
})