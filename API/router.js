// Router for the API

const express = require('express')
const router = express.Router()

const writingController = require('./controllers/writing.js')

router.get('/beginwriting', writingController.beginWriting)

module.exports = router
