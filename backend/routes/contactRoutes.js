// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', addContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;
