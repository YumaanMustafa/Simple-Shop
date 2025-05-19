const db = require('../config/db');

const getAllReviews = (req, res) => {
  db.query('SELECT * FROM reviews', (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch reviews' });
    res.json(results);
  });
};

const addReview = (req, res) => {
  const { product_id, reviewer_name, rating, comment } = req.body;
  if (!product_id || !reviewer_name || !rating) {
    return res.status(400).json({ error: 'product_id, reviewer_name, and rating are required' });
  }

  db.query(
    'INSERT INTO reviews (product_id, reviewer_name, rating, comment) VALUES (?, ?, ?, ?)',
    [product_id, reviewer_name, rating, comment || null],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to add review' });
      res.status(201).json({ message: 'Review added', reviewId: result.insertId });
    }
  );
};

const updateReview = (req, res) => {
  const { id } = req.params;
  const { reviewer_name, rating, comment } = req.body;

  db.query(
    'UPDATE reviews SET reviewer_name = ?, rating = ?, comment = ? WHERE id = ?',
    [reviewer_name, rating, comment || null, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to update review' });
      res.json({ message: 'Review updated' });
    }
  );
};

const deleteReview = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM reviews WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to delete review' });
    res.json({ message: 'Review deleted' });
  });
};

module.exports = {
  getAllReviews,
  addReview,
  updateReview,
  deleteReview,
};
