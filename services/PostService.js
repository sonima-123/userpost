const Post = require('../models/post');

module.exports = {
  createPost: async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  listPosts: async (req, res) => {
    try {
      const posts = await Post.find().populate('userId');
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  searchPosts: async (req, res) => {
    const { searchTerm } = req.body; 
    try {
      const posts = await Post.find({
        $or: [
          { title: { $regex: searchTerm, $options: 'i' } },
          { content: { $regex: searchTerm, $options: 'i' } },
          { 'userId.name': { $regex: searchTerm, $options: 'i' } },
        ],
      }).populate('userId');
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
}  
