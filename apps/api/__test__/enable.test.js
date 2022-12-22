// test.js
const { spec } = require('pactum');

require('dotenv').config();
const { HOST, PORT } = process.env;

it('should get a response with status code 200', async () => {
  await spec()
    .get(`http://${HOST}:${PORT}`)
    .expectStatus(302);
});