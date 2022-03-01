const request = require('supertest')
const { app } = require('../src/app')

describe('HelloController', () => {
    it('testing hello controller', async () => {
        const result = await request(app).get('/hello')
        expect(result.statusCode).toEqual(200)
        expect(result.body.message).toEqual('success get hello')
        expect(result.body.data).toEqual({
            user: 'Saefulloh Maslul',
            avatar: 'image.jpg',
        })
    })
})