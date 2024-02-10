const express = require('express');
const UserController = require('../services/Userservice');
const router = express.Router();


router.post('/users', UserController.createUser);

module.exports = router;