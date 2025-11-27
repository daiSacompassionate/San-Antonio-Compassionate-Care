// backend/routes/repliedRoutes.js
const express = require('express');
const router = express.Router();
const {
    createRepliedInquiry,
    getRepliedInquiries,
    deleteRepliedInquiry
} = require('../controllers/repliedInquiryController');
const {
    createRepliedTour,
    getRepliedTours,
    deleteRepliedTour
} = require('../controllers/repliedTourController');

// Replied Inquiries Routes
router.post('/inquiries', createRepliedInquiry);
router.get('/inquiries', getRepliedInquiries);
router.delete('/inquiries/:id', deleteRepliedInquiry);

// Replied Tours Routes
router.post('/tours', createRepliedTour);
router.get('/tours', getRepliedTours);
router.delete('/tours/:id', deleteRepliedTour);

module.exports = router;
