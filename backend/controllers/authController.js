const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// SIGNUP CONTROLLER
const signup = (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Check if username exists
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return res.status(500).json({ error: 'Error hashing password' });

      // Insert user into DB
      db.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, hash],
        (err, result) => {
          if (err) return res.status(500).json({ error: 'Failed to register user' });
          res.status(201).json({ message: 'User registered successfully' });
        }
      );
    });
  });
};

// LOGIN CONTROLLER
const login = (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Check user in DB
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = results[0];

    // Compare password
    bcrypt.compare(password, user.password, (err, match) => {
      if (err) return res.status(500).json({ error: 'Error comparing passwords' });
      if (!match) return res.status(401).json({ error: 'Invalid credentials' });

      // Generate JWT
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(200).json({
        message: 'Login successful',
        token,
      });
    });
  });
};

module.exports = {
  signup,
  login,
};
