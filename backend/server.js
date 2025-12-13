// backend/server.js
const app = require('./app.js');
const initializeDatabase = require('./config/initDatabase');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Initialize database schema before starting server
(async () => {
    try {
        // Initialize database tables
        await initializeDatabase();
        
        // Start server after database is ready
        app.listen(PORT, () => {
            console.log(`✅ Server running on http://localhost:${PORT}`);
            console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
})();
