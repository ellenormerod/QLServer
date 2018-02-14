/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Place, Review} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'ellen@email.com', name: 'Ellen Ormerod', password: '123'}), //1
    User.create({email: 'virginia@email.com', name: 'Virginia Chalmers', password: '123'}), //2
    User.create({email: 'johndoe@email.com', name: 'John Doe', password: '123'}), //3
    User.create({email: 'adam@email.com', name: 'Adam Jones', password: '123'}), //4
  ])

  const places = await Promise.all([
    Place.create({name: '25 Degrees', location: '736 N Clark St. Chicago, IL 60654', noise: 2}), //1
    Place.create({name: 'The Hampton Social', location: '353 W Hubbard St. Chicago, IL 60654', noise: 4.5}), //2
    Place.create({name: 'Highline Bar + Lounge', location: '169 W Kinzie St. Chicago, IL 60654', noise: .67}), //3
    Place.create({name: 'Mother Hubbard\'s', location: '5 W Hubbard St. Chicago, IL 60654', noise: 4}), //4
    Place.create({name: 'Point and Feather', location: '10 W LaSalle St. Chicago, IL 60654' , noise: 4}), //5
    Place.create({name: 'Brohans', location: '102 W Superior St. Chicago, IL 60654', noise: 2}), //6
    Place.create({name: 'Something', location: '102 W Superior St. Chicago, IL 60654', noise: 1}), //7
    Place.create({name: 'Another Thing', location: '20 W LaSalle St. Chicago, IL 60654', noise: 5}), //8
  ])

  const reviews = await Promise.all([
    Review.create({comments: 'Around 9 pm on a Friday this restaurant was playing music very loudly. At this time it is reasonable but since it is a restaurant I was expecting to at least be able to hear the person next to me, but that was extremely hard.', noise: 2, placeId: 1, userId: 1}),
    Review.create({comments: 'At dinner time I was able to hear my group perfectly. The restaurant didn\'t have loud music playing, but there were lots of groups talking loudly.', noise: 4, placeId: 2, userId: 1}),
    Review.create({comments: 'Our group went to brunch here and the noise level was very acceptable.', noise: 5, placeId: 2, userId: 2}),
    Review.create({comments: 'We went here as a group for happy hour on a Friday and we could not hear anyone.', noise: 1, placeId: 3, userId: 2}),
    Review.create({comments: 'A horrible experience, the music was so loud it was terrible.', noise: 0, placeId: 3, userId: 3}),
    Review.create({comments: 'This place plays music so loud! Do not go here if you have any interest in talking to the people you are with.', noise: 1, placeId: 3, userId: 4}),
    Review.create({comments: 'The bar wasn\'t crowded when we went on a Friday at 7 and the music was not so loud that our group could talk.', noise: 4, placeId: 4, userId: 4})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
