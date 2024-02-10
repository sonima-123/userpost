const express = require('express');
const router = express.Router();
const PostController = require('../services/PostService');

router.post('/posts', PostController.createPost);
router.get('/posts', PostController.listPosts);
router.get('/posts/search', PostController.searchPosts);

module.exports = router;