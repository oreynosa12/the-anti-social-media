const router = require("express").Router();

const {
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");

router.route("/").get(getThoughts);
router.route("/create").post(createThought);
router.route("/:thoughtId").put(updateThought);
router.route("/:thoughtId").delete(deleteThought);

module.exports = router;
