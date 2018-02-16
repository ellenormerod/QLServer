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

  //1 is so loud I can't hear the person next to me, 2 is it was louder than I would have liked and it was hard to hear
  //3 is it was louder than I wanted but very middle of the road and wasn't terrible but could've been better
  //4 is this was a good level for the atmosphere and/or I could hear the people around me for the most part/maybe it was a little loud bc of group or something
  //5 is this was the perfect level for the atmosphere and/or I could hear the people around me
  const places = await Promise.all([
    Place.create({name: '25 Degrees', location: '736 N Clark St. Chicago, IL 60654', noise: 2}), //1
    Place.create({name: 'The Hampton Social', location: '353 W Hubbard St. Chicago, IL 60654', noise: 4.5}), //2
    Place.create({name: 'Highline Bar + Lounge', location: '169 W Kinzie St. Chicago, IL 60654', noise: 1.33}), //3
    Place.create({name: 'Mother Hubbard\'s', location: '5 W Hubbard St. Chicago, IL 60654', noise: 4}), //4
    Place.create({name: 'Point and Feather', location: '113 W Hubbard St. Chicago, IL 60654', noise: 4}), //5
    Place.create({name: 'Brehons Pub', location: '731 N Wells St. Chicago, IL 60654', noise: 2.7}), //6
    Place.create({name: 'Quartino Ristorante', location: '626 N State St. Chicago, IL 60654', noise: 3.5}), //7
    Place.create({name: 'The Purple Pig', location: '500 N Michigan Ave Chicago, IL 60611', noise: 2}), //8
  ])

  const reviews = await Promise.all([
    Review.create({comments: 'Around 9 pm on a Friday this restaurant was playing music very loudly. At this time it is reasonable but since it is a restaurant I was expecting to at least be able to hear the person next to me, but that was extremely hard.', noise: 2, placeId: 1, userId: 1}),
    Review.create({comments: 'At dinner time I was able to hear my group perfectly. The restaurant didn\'t have loud music playing, but there were lots of groups talking loudly.', noise: 4, placeId: 2, userId: 1}),
    Review.create({comments: 'Our group went to brunch here and the noise level was very acceptable.', noise: 5, placeId: 2, userId: 2}),
    Review.create({comments: 'We went here as a group for happy hour on a Friday and we could not hear anyone.', noise: 3, placeId: 3, userId: 2}),
    Review.create({comments: 'A horrible experience, the music was so loud it was terrible.', noise: 0, placeId: 3, userId: 3}),
    Review.create({comments: 'This place plays music so loud! Do not go here if you have any interest in talking to the people you are with.', noise: 1, placeId: 3, userId: 4}),
    Review.create({comments: 'The bar wasn\'t crowded when we went on a Friday at 7 and the music was not so loud that our group could talk.', noise: 4, placeId: 4, userId: 4}),
    Review.create({comments: 'Loved this atmosphere and noise level here!', noise: 4, placeId: 5, userId: 1}),
    Review.create({comments: 'This is a great bar but music and people were louder than preferred but not horrible.', noise: 3, placeId: 6, userId: 4}),
    Review.create({comments: 'Solid place, but they could\'ve turned the music down a bit since people are talking to each other a lot here.', noise: 3, placeId: 6, userId: 2}),
    Review.create({comments: 'Soo loud here it was so annoying.', noise: 2, placeId: 6, userId: 3}),
    Review.create({comments: 'This restaurant is large so there are a lot of people talking and it was definitely a bit loud.', noise: 3, placeId: 7, userId: 1}),
    Review.create({comments: 'Our group was able to hear each other and the atmoshpere was really enjoyable.', noise: 4, placeId: 7, userId: 1}),
    Review.create({comments: 'This place is trendy but was way louder than it needed to be. It was from groups but the restaurant should help with accoustics.', noise: 2, placeId: 8, userId: 4}),
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
