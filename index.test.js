const app = require('./index');
const supertest = require('supertest')
const request = supertest(app)

it('App should return 47RAbOoF for word fOoBar25', async () => {
    request
        .get('/api/mirror')
        .query({word:'fOoBar25'})
        .then(res => {
            expect(res.body.transformed).toBe('47RAbOoF')
        });
})