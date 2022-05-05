const app = require('../../app');
const request = require('supertest')

describe('1st endpoint', () => {
    it('GET /api/health returns { "status":"ok" }', async () => {
        const res = await request(app)
            .get('/api/health')
            expect(res.statusCode).toEqual(200);
    })
});

describe('2nd endpoint', () => {
    it('GET /api/miror?word=47RAbOoF returns { "transformed":"fOoBar25" }', async () => {
        const res = await request(app)
            .get('/api/mirror')
            .query({word:'fOoBar25'})
            expect(res.statusCode).toEqual(200);
            expect(res.body.transformed).toBe('47RAbOoF');
    })
});