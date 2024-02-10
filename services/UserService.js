const User = require('../models/user');

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};