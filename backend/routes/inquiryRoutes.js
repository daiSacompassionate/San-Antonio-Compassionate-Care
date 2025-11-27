// backend/routes/inquiryRoutes.js
const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries, deleteInquiry } = require('../controllers/inquiryController');

// POST /api/inquiries
router.post('/', createInquiry);

// GET /api/inquiries  (if you want an admin view)
router.get('/', getInquiries);

// DELETE /api/inquiries/:id  (admin removes an inquiry)
router.delete('/:id', deleteInquiry);

module.exports = router;
