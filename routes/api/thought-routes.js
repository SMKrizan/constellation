const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThoughtById,
    deleteThought
} = require('../../controllers/thoughts-controller');


// GET all route: /api/thoughts
router
    .route('/')
    .get(getAllThoughts)


// POST thought route: /api/thoughts/:userId
router
    .route('/:userId')
    .post(addThought)


    // GET one, PUT and DELETE routes: /api/thoughts/:thoughtsId
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought)


module.exports = router;