const request = require('supertest');
const connection = require('../../src/database/connection')
const app = require('../../src/app');

describe('ONG', () => {

  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  })

  it ('should be able to createa new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name:"APAD4",
        email:"contato@teste.com",
        whatsapp:"0047000000",
        city:"Rio do Sul",
        uf:"sc"
    })

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8)
  });
})