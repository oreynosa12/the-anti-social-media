const router = require("express").Router();

const {
  getThoughts,
  createThought,
  updateThought,
} = require("../../controllers/thoughtController.js");

router.route("/").get(getThoughts);
router.route("/create").post(createThought);
router.route("/:thoughtId").put(updateThought);

module.exports = router;
