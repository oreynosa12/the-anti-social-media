const { User } = require('../models');

module.exports = {
  // Get all users
  getUser(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res){
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res){
    User.update(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  }
}