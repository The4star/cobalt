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

describe('getting data from endpoints', () => {

  it('retrieves all the directories', async () => {
    const res = await request(app)
      .get('/data/directories')
      expect(res.statusCode).toEqual(200)
      expect(res.body[0]._id).toBeTruthy()
  })

  it('retrieves all the items', async () => {
    const res = await request(app)
      .get('/data/items')
      expect(res.statusCode).toEqual(200)
      expect(res.body[0]._id).toBeTruthy()
      expect(res.body[0].name).toBeTruthy()
  })

  it('retrieves all the collections', async () => {
    const res = await request(app)
      .get('/data/collections')
      expect(res.statusCode).toEqual(200)
      expect(res.body[0].items.length).toBeGreaterThan(1)
  })

})