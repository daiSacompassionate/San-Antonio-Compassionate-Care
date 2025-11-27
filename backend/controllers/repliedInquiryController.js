// backend/controllers/repliedInquiryController.js
const pool = require('../config/db');

// Save a replied inquiry to database
const createRepliedInquiry = async (req, res) => {
    const { name, email, phone, message, service } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const query = `
            INSERT INTO replied_inquiries (name, email, phone, message, service)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [name, email, phone || null, message || null, service || null];

        const result = await pool.query(query, values);
        return res.status(201).json({ data: result.rows[0] });
    } catch (err) {
        console.error('Error creating replied inquiry', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Get all replied inquiries (admin view)
const getRepliedInquiries = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM replied_inquiries ORDER BY created_at DESC');
        res.json({ data: result.rows });
    } catch (err) {
        console.error('Error fetching replied inquiries', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a replied inquiry by id
const deleteRepliedInquiry = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Missing replied inquiry id' });
    }

    try {
        const result = await pool.query('DELETE FROM replied_inquiries WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Replied inquiry not found' });
        }
        return res.json({ data: result.rows[0] });
    } catch (err) {
        console.error('Error deleting replied inquiry', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createRepliedInquiry, getRepliedInquiries, deleteRepliedInquiry };
