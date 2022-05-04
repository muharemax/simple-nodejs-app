const app = require('./index');
const supertest = require('supertest')
const request = supertest(app)

it('GET /api/health returns { "status":"ok" }', async () => {
    request
        .get('/api/health')
        .then(res => {
            expect(res.body.status).toBe('ok')
        });
})

it('GET /api/miror?word=47RAbOoF returns { "transformed":"fOoBar25" }', async () => {
    request
        .get('/api/mirror')
        .query({word:'fOoBar25'})
        .then(res => {
            expect(res.body.transformed).toBe('47RAbOoF')
        });
})