// backend/controllers/authController.js
const db = require('../config/db');
const bcrypt = require('bcrypt');

async function login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Missing credentials' });

    try {
        const result = await db.query('SELECT id, username, password_hash FROM admins WHERE username=$1', [username]);
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const admin = result.rows[0];
        const match = await bcrypt.compare(password, admin.password_hash);
        if (!match) return res.status(401).json({ error: 'Invalid credentials' });

        // return safe user object (no password)
        return res.json({ user: { id: admin.id, username: admin.username } });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ error: 'Server error' });
    }
}

async function register(req, res) {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Missing fields' });

    try {
        const hashed = await bcrypt.hash(password, 10);
        const result = await db.query(
            'INSERT INTO admins (username, password_hash) VALUES ($1, $2) RETURNING id, username',
            [username, hashed]
        );
        return res.status(201).json({ user: result.rows[0] });
    } catch (err) {
        console.error('Register error:', err);
        if (err.code === '23505') return res.status(400).json({ error: 'Username already exists' });
        return res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { login, register };
