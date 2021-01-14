const router = require('express').Router();

const {
    getAllThoughts,
    getOneThoughtById,
    addThought,
    updateThoughtById,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');


// GET all route: /api/thoughts
router
    .route('/')
    .get(getAllThoughts);


// POST thought route: /api/thoughts/:userId
router
    .route('/:userId')
    .post(addThought);


// GET one, PUT and DELETE routes: /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getOneThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought);

// PUT reaction route: /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .put(addReaction);


// DELETE reaction route: /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;