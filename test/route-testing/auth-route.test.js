const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')

beforeAll(() => {
  const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
  mongoose.connect(process.env.TEST_DB_URL, dbOptions, (err) => {
    if (err) {
      console.log('db not connected')
    }
  })
})

afterAll(() => {
  mongoose.connection.close();
});

describe('testing authentication ', () => {

// change this test user when running

//   it('signs up a new user', async () => {
//     const res = await request(app)
//       .post('/register')
//       .send({
//         firstName: "Fake",
//         lastName: "Person",
//         email: "dog@gmail.com",
//         password: "123456"
//       })
//       expect(res.body.success).toBe(true)
//   })

it('logs in an existing user', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: "fake@gmail.com",
        password: "123456"
      })
      expect(res.body.success).toBe(true)
  })

  it('can access the logged in user data', async () => {
    const res = await request(app)
      .get('/user')
      expect(res.body.loggedIn).toBe(false)
  })

})