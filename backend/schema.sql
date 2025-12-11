-- Database Schema for San Antonio Compassionate Care
-- Create all necessary tables

-- Admins table for authentication
CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inquiries table for general inquiries
CREATE TABLE IF NOT EXISTS inquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT,
    service VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tours table for tour scheduling
CREATE TABLE IF NOT EXISTS tours (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_time VARCHAR(50) NOT NULL,
    number_of_guests INTEGER,
    tour_type VARCHAR(100),
    special_requests TEXT,
    message TEXT,
    service VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Replied Inquiries table (archived inquiries)
CREATE TABLE IF NOT EXISTS replied_inquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT,
    service VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Replied Tours table (archived tours)
CREATE TABLE IF NOT EXISTS replied_tours (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    preferred_date DATE,
    preferred_time VARCHAR(50),
    number_of_guests INTEGER,
    tour_type VARCHAR(100),
    special_requests TEXT,
    message TEXT,
    service VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tours_created_at ON tours(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tours_date_time ON tours(preferred_date, preferred_time);
CREATE INDEX IF NOT EXISTS idx_replied_inquiries_created_at ON replied_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_replied_tours_created_at ON replied_tours(created_at DESC);
