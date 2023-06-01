const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/Users
router.route('/').get(getUser).post(createUser);
router.route('/:userId').put(updateUser);
router.route('/:userId').delete(deleteUser);

// /api/Users/:UserId
// router
//   .route('/:UserId')
//   .get(getSingleUser)
//   .put(updateUser);
//   .delete(deleteUser);

module.exports = router;