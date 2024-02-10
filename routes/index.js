const express = require('express');
const UserRoute = require('../routes/UserRoute');
const PostRoute = require('../routes/Postroute');




const router = express.Router();

router.post('/users', UserController.createUser);

module.exports = router;
