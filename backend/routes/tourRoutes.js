const express = require('express');
const {
    createTour,
    getTours,
    deleteTour,
    getAvailability,
    getFullyBookedDates
} = require("../controllers/tourController.js");

const router = express.Router();

router.post("/", createTour);
router.get("/gettour", getTours);
router.get("/availability", getAvailability);
router.get("/fully-booked", getFullyBookedDates);
router.delete("/:id", deleteTour);

module.exports = router;