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

it('Complementary number of 9 is 0', async () => {
    request
        .get('/api/mirror')
        .query({word:'9'})
        .then(res => {
            expect(res.body.transformed).toBe('0')
        });
})

it('Complementary number of 8 is 1', async () => {
    request
        .get('/api/mirror')
        .query({word:'8'})
        .then(res => {
            expect(res.body.transformed).toBe('1')
        });
})

it('Complementary number of 7 is 2', async () => {
    request
        .get('/api/mirror')
        .query({word:'7'})
        .then(res => {
            expect(res.body.transformed).toBe('2')
        });
})

it('Complementary number of 6 is 3', async () => {
    request
        .get('/api/mirror')
        .query({word:'6'})
        .then(res => {
            expect(res.body.transformed).toBe('3')
        });
})

it('Complementary number of 5 is 4', async () => {
    request
        .get('/api/mirror')
        .query({word:'5'})
        .then(res => {
            expect(res.body.transformed).toBe('4')
        });
})

it('Complementary number of 4 is 5', async () => {
    request
        .get('/api/mirror')
        .query({word:'4'})
        .then(res => {
            expect(res.body.transformed).toBe('5')
        });
})

it('Complementary number of 3 is 6', async () => {
    request
        .get('/api/mirror')
        .query({word:'3'})
        .then(res => {
            expect(res.body.transformed).toBe('6')
        });
})

it('Complementary number of 2 is 7', async () => {
    request
        .get('/api/mirror')
        .query({word:'2'})
        .then(res => {
            expect(res.body.transformed).toBe('7')
        });
})

it('Complementary number of 1 is 8', async () => {
    request
        .get('/api/mirror')
        .query({word:'1'})
        .then(res => {
            expect(res.body.transformed).toBe('8')
        });
})

it('Complementary number of 0 is 9', async () => {
    request
        .get('/api/mirror')
        .query({word:'0'})
        .then(res => {
            expect(res.body.transformed).toBe('9')
        });
})