const helloController = require('../src/controllers/hello.controller')

const mockRequest = (body = {}) => ({body})
const mockResponse = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
}
const mockNext = () => jest.fn().mockReturnValue(true)

describe('Test hello controller', () => {
    test('testing controller hello with result success', (done) => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        helloController.hello(req, res, next)
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            message: 'success get hello',
            data: {
                user: 'Saefulloh Maslul',
                avatar: 'image.jpg',
            },
            error: null
        })
        done()
    })

    test('testing controller hello with some error', (done) => {
        const req = mockRequest()
        const res = {}
        res.json = jest.fn().mockReturnValue(res)
        res.status = jest.fn().mockRejectedValueOnce('some error')
        
        const next = mockNext()

        const result = helloController.hello(req, res, next)
        
        expect(result).toBeTruthy()
        done()
    })
})