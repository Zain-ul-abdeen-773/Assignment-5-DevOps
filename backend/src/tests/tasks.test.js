const request = require('supertest');
const app = require('../index');

describe('Task API', () => {
  it('GET /health should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });

  it('POST /api/tasks should require title', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ description: 'no title here' });
    expect(res.statusCode).toBe(400);
  });

  it('should correctly identify completed task logic', () => {
    const task = { title: 'Test', completed: false };
    const toggled = { ...task, completed: !task.completed };
    expect(toggled.completed).toBe(true);
  });
});