const router = require('express').Router()
const {Place, Review} = require('../db/models')
module.exports = router

//get list of all places
router.get('/', (req, res, next) => {
  Place.findAll()
    .then(places => res.json(places))
    .catch(next)
})

//get one place and include its associated reviews (will need to change where key lives)
router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Place.findById(id,
  {
    include: [Review]
  })
    .then(place => res.json(place))
    .catch(next)
})

// router.post('/', (req, res, next) => {
//   Place.findOrCreate()
// })