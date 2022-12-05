import request from 'supertest';

import app from '../src/app';

describe('Test app.ts', () => {
  test('Catch-all route', async () => {
    const res = await request(app).get('/');
    console.log(res.text);
    expect(res.text).toEqual('hello from server');
  });
});
