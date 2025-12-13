// backend/config/initDatabase.js
const pool = require('./db');
const fs = require('fs');
const path = require('path');

/**
 * Initialize database schema
 * Runs on application startup to ensure all tables exist
 * Safe to run multiple times (uses CREATE TABLE IF NOT EXISTS)
 */
async function initializeDatabase() {
    try {
        console.log('🔄 Initializing database schema...');
        
        // Read schema.sql file
        const schemaPath = path.join(__dirname, '..', 'schema.sql');
        console.log('📁 Schema path:', schemaPath);
        
        // Check if file exists
        if (!fs.existsSync(schemaPath)) {
            throw new Error(`Schema file not found at: ${schemaPath}`);
        }
        
        const schema = fs.readFileSync(schemaPath, 'utf8');
        console.log('📋 Schema file loaded, size:', schema.length, 'bytes');
        
        // Execute schema
        await pool.query(schema);
        
        console.log('✅ Database schema initialized successfully');
        return true;
    } catch (error) {
        console.error('❌ Error initializing database schema:');
        console.error('   Error code:', error.code);
        console.error('   Error message:', error.message);
        console.error('   Full error:', error);
        
        // Don't exit process - tables might already exist
        // Log error but allow application to continue
        if (error.code === '42P07') {
            // Table already exists - this is fine
            console.log('ℹ️  Tables already exist, skipping initialization');
            return true;
        }
        
        // For other errors, log but don't crash
        console.error('⚠️  Database initialization had issues, but continuing...');
        console.error('   You may need to run schema.sql manually');
        return false;
    }
}

module.exports = initializeDatabase;
