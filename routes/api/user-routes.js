const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById
    deleteUser,
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

module.exports = router;