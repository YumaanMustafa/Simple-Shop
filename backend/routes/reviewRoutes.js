const express = require('express');
const {
  getAllReviews,
  addReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');
const router = express.Router();
router.get('/', getAllReviews);
router.post('/', addReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);
module.exports = router;
