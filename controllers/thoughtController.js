const { Thought, User } = require("../models");

module.exports = {
  // Get all thought
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((deletedUser) =>
        !deletedUser
          ? res.status(404).json({ message: "No thought with that ID" })
          : User.deleteMany({ _id: { $in: deletedUser.thoughts } })
      )
      .then(() => res.json({ message: "Thoughts deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};

// after line 32 test:
// User.findOneAndUpdate(
//     {thoughts:req.params.thoughtId},
//     {$pull:{thoughts: req.params.thoughtId}},
//     {new: true}
// ),
// )
// .then((user))=>
// !user
// ?res.status(404).json()
