// backend/seedAdmins.js
require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('./config/db');

async function seed() {
    try {
        const users = [
            { username: 'Dai', password: 'Dai@SanAntonio' },
            { username: 'Cara', password: 'Cara@SanAntonio' },
        ];

        for (const u of users) {
            const hashed = await bcrypt.hash(u.password, 10);
            await db.query(
                'INSERT INTO admins (username, password_hash) VALUES ($1, $2) ON CONFLICT (username) DO NOTHING',
                [u.username, hashed]
            );
            console.log('Seeded:', u.username);
        }

        console.log('Seeding complete.');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seed();
