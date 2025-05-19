const express = require('express');
const { signup, login } = require('../controllers/authController');
const verifyToken = require('../middleWare/authMiddlewar');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// 👇 Add this test protected route
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Welcome to your profile!',
    user: req.user, // from JWT
  });
});

module.exports = router;
