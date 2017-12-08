'use strict'
const api = require('express').Router()
const db = require('../db')

api.use('/campuses', require('./campusRoutes'));
api.use('/students', require('./studentRoutes'))

module.exports = api