// backend/controllers/repliedTourController.js
const pool = require('../config/db');

// Save a replied tour to database
const createRepliedTour = async (req, res) => {
    const { name, email, phone, preferred_date, preferred_time, number_of_guests, tour_type, special_requests, message, service } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const query = `
            INSERT INTO replied_tours (name, email, phone, preferred_date, preferred_time, number_of_guests, tour_type, special_requests, message, service)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *;
        `;
        const values = [
            name,
            email,
            phone || null,
            preferred_date || null,
            preferred_time || null,
            number_of_guests || null,
            tour_type || null,
            special_requests || null,
            message || null,
            service || null
        ];

        const result = await pool.query(query, values);
        return res.status(201).json({ data: result.rows[0] });
    } catch (err) {
        console.error('Error creating replied tour', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Get all replied tours (admin view)
const getRepliedTours = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM replied_tours ORDER BY created_at DESC');
        res.json({ data: result.rows });
    } catch (err) {
        console.error('Error fetching replied tours', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a replied tour by id
const deleteRepliedTour = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Missing replied tour id' });
    }

    try {
        const result = await pool.query('DELETE FROM replied_tours WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Replied tour not found' });
        }
        return res.json({ data: result.rows[0] });
    } catch (err) {
        console.error('Error deleting replied tour', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createRepliedTour, getRepliedTours, deleteRepliedTour };
