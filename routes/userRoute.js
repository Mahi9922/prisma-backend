const express = require('express')
const routes = express.Router()

const { signup } = require('../controllers/userControllers')
routes.route('/signup').post(signup)

module.exports = routes