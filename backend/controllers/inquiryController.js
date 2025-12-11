// backend/controller/inquiryController.js
const pool = require('../config/db');

// Create new inquiry
const createInquiry = async (req, res) => {
    const { name, email, phone, message, service } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const query = `
      INSERT INTO inquiries (name, email, phone, message, service)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
        const values = [name, email, phone || null, message || null, service || null];

        const result = await pool.query(query, values);
        return res.status(201).json({ data: result.rows[0] });
    } catch (err) {
        console.error('Error creating inquiry', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Optionally: fetch all inquiries (admin)
const getInquiries = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inquiries ORDER BY created_at DESC');
        res.json({ data: result.rows });
    } catch (err) {
        console.error('Error fetching inquiries', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete an inquiry by id
const deleteInquiry = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Missing inquiry id' });
    }

    try {
        const result = await pool.query('DELETE FROM inquiries WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Inquiry not found' });
        }
        return res.json({ data: result.rows[0] });
    } catch (err) {
        console.error('Error deleting inquiry', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createInquiry, getInquiries, deleteInquiry };
