const { hello } = require('../controllers/hello.controller')

const Router = require('express').Router

const router = Router()

router.get('/hello', hello)

module.exports = router