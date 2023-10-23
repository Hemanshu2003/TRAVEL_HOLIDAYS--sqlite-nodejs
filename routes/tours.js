const express = require('express');

const {
  getAllTour,
  createTour,
  deleteTour,
  updateTour,
  getATour,
} = require('../controller/tours');

const router = express.Router();

router.route('/').get(getAllTour).post(createTour);
router.route('/:id').delete(deleteTour).patch(updateTour).get(getATour);

module.exports = router;
