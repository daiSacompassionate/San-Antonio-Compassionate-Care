const pool = require('../config/db');

const AVAILABLE_TIME_SLOTS = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM'
];

const createTour = async (req, res) => {
    const {
        name,
        email,
        phone,
        preferredDate,
        preferredTime,
        numberOfGuests,
        tourType,
        specialRequests,
        message,
        service
    } = req.body;

    if (!name || !email || !phone || !preferredDate || !preferredTime) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        // ensure selected slot exists in allowed list
        if (!AVAILABLE_TIME_SLOTS.includes(preferredTime)) {
            return res.status(400).json({ error: "Selected time slot is invalid" });
        }

        const slotConflict = await pool.query(
            `SELECT id FROM tours WHERE preferred_date = $1 AND preferred_time = $2`,
            [preferredDate, preferredTime]
        );

        if (slotConflict.rowCount > 0) {
            return res.status(409).json({ error: "Selected time slot is already booked. Please choose another time." });
        }

        const dailyCount = await pool.query(
            `SELECT COUNT(*)::int AS count FROM tours WHERE preferred_date = $1`,
            [preferredDate]
        );

        if (dailyCount.rows[0].count >= AVAILABLE_TIME_SLOTS.length) {
            return res.status(409).json({ error: "All time slots for this date are already booked. Please choose another date." });
        }

        const result = await pool.query(
            `INSERT INTO tours 
                (name, email, phone, preferred_date, preferred_time, number_of_guests, tour_type, special_requests, message, service)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
             RETURNING *`,
            [
                name,
                email,
                phone,
                preferredDate,
                preferredTime,
                numberOfGuests,
                tourType,
                specialRequests || null,
                message,
                service
            ]
        );

        return res.json({ success: true, data: result.rows[0] });

    } catch (error) {
        console.error("Error creating tour:", error);
        return res.status(500).json({ error: "Server error while saving tour" });
    }
};

// Fetch all tours (admin)
const getTours = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM tours ORDER BY created_at DESC`
        );
        res.json({ data: result.rows });
    } catch (err) {
        console.error('Error fetching tours:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteTour = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(`DELETE FROM tours WHERE id = $1`, [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Tour not found" });
        }

        res.json({ message: "Tour deleted successfully" });
    } catch (err) {
        console.error("Error deleting tour:", err);
        res.status(500).json({ error: "Server error" });
    }
};

const getAvailability = async (req, res) => {
    const { date } = req.query;

    if (!date) {
        return res.status(400).json({ error: "Query parameter 'date' is required" });
    }

    try {
        const result = await pool.query(
            `SELECT preferred_time FROM tours WHERE preferred_date = $1`,
            [date]
        );

        const bookedSlots = result.rows.map(row => row.preferred_time);
        const remainingSlots = AVAILABLE_TIME_SLOTS.filter(slot => !bookedSlots.includes(slot));

        return res.json({
            date,
            bookedSlots,
            remainingSlots,
            isFullyBooked: remainingSlots.length === 0
        });
    } catch (error) {
        console.error("Error fetching availability:", error);
        return res.status(500).json({ error: "Server error while checking availability" });
    }
};

const getFullyBookedDates = async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        const params = [];
        const conditions = [];

        if (startDate) {
            params.push(startDate);
            conditions.push(`preferred_date >= $${params.length}`);
        }

        if (endDate) {
            params.push(endDate);
            conditions.push(`preferred_date <= $${params.length}`);
        }

        const whereClause = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

        const query = `
            SELECT preferred_date
            FROM tours
            ${whereClause}
            GROUP BY preferred_date
            HAVING COUNT(*) >= $${params.length + 1}
        `;

        params.push(AVAILABLE_TIME_SLOTS.length);

        const result = await pool.query(query, params);
        const dates = result.rows.map(row => row.preferred_date);

        return res.json({ dates });
    } catch (error) {
        console.error("Error fetching fully booked dates:", error);
        return res.status(500).json({ error: "Server error while checking fully booked dates" });
    }
};

module.exports = {
    createTour,
    getTours,
    deleteTour,
    getAvailability,
    getFullyBookedDates,
    AVAILABLE_TIME_SLOTS
};
