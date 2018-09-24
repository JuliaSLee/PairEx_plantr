const {
  db,
  Gardener,
  Plot,
  Vegetable
} = require('./models');
const Sequelize = require('sequelize');

db.sync({
    logging: false
  })
  .then(() => {
    console.log('Successfully synced!');
    const carrot = Vegetable.create({
      name: 'carrot',
      color: 'red',
      planted_on: '01-04-2018'
    }),
    const eggplant = Vegetable.create({
      name: 'eggplant',
      color: 'purple',
      planted_on: '09-02-2018'
    }),
    const ginger = Vegetable.create({
      name: 'ginger',
      color: 'yellow',
      planted_on: '04-07-2018'
    })
    return [carrot, eggplant, ginger]
  }
  )
  .then(() => {}
  )
  .catch(e => {
    console.log('Failure happened')
    console.log(e)
  })
  .then(
    db.close()
  )


carrot.then(vegetable => {
    return Gardener.create({
      favorite_vegetable: vegetable.id
    })
  })
  .then()