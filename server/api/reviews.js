const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Review.findAll({where: {placeId: id}})
    .then(review => res.json(review))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Review.create(req.body)
    .then(review => res.json(review))
    .catch(next)
})