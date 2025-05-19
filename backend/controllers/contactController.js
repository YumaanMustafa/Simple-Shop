// controllers/contactController.js
const db = require('../config/db');

// Get all contacts
exports.getAllContacts = (req, res) => {
  db.query('SELECT * FROM contact', (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch contacts' });
    res.json(results);
  });
};

// Get single contact by ID
exports.getContactById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM contact WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch contact' });
    if (results.length === 0) return res.status(404).json({ error: 'Contact not found' });
    res.json(results[0]);
  });
};

// Create new contact
exports.addContact = (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  db.query(
    'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)',
    [name, email, message],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to add contact' });
      res.status(201).json({ message: 'Contact added', contactId: result.insertId });
    }
  );
};

// Update contact by ID
exports.updateContact = (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;

  db.query(
    'UPDATE contact SET name = ?, email = ?, message = ? WHERE id = ?',
    [name, email, message, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to update contact' });
      res.json({ message: 'Contact updated' });
    }
  );
};

// Delete contact by ID
exports.deleteContact = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM contact WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to delete contact' });
    res.json({ message: 'Contact deleted' });
  });
};
