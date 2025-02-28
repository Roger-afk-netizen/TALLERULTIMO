const request = require('supertest');
const app = require('../path/to/your/app'); // Ajusta la ruta según tu proyecto

test('Página contiene "Versión Blue"', async () => {
  const response = await request(app).get('/');
  expect(response.text).toContain('Versión Blue');
});
