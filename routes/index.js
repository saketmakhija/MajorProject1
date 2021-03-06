const express = require('express');

const route = express.Router();

const homeController = require('../controllers/home_controller');
console.log("route is running");

route.get('/', homeController.home);

route.use('/users', require('./users'));
route.use('/posts', require('./posts'));

module.exports = route;

