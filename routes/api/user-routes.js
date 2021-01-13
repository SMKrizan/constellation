const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');


// GET all and POST routes: /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);


// GET one, PUT, and DELETE routes: /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUser);


// ADD friend and DELETE friend /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .put(addFriend)
    .delete(removeFriend)

module.exports = router;