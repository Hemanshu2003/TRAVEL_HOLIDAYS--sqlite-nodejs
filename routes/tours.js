const express = require('express');

const { getAllTour, createTour, deleteTour } = require('../controller/tours');

const router = express.Router();

router.route('/').get(getAllTour).post(createTour);
router.route('/:id').delete(deleteTour);

module.exports = router;
