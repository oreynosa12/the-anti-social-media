const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  getUser(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((deletedUser) =>
        !deletedUser
          ? res.status(404).json({ message: "No user with that ID" })
          : User.deleteMany({ _id: { $in: deletedUser.thoughts } })
      )
      .then(() => res.json({ message: "User and Thoughts deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
