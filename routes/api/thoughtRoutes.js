const router = require("express").Router();

const { getThoughts, createThought } = require("../../controllers/thoughtController.js");

router.route("/").get(getThoughts);
router.route("/create").post(createThought);
module.exports = router;
