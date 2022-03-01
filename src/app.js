require('dotenv').config()
const express = require('express')

const app = express()

const hello = require('./routes/hello.router')

app.use(hello)

app.use((err, req, res, next) => {
    return res.status(err.code).json({
        message: err.message,
        data: null,
        error: err
    })
})

exports.app = app