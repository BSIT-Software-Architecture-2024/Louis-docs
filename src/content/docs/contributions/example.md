---
title: Dccp Admin Panel
description: A School management System.
---


# Project Documentation

## Overview
a Laravel-based school management system with features for enrollment, assessment, and administrative functions. The project has undergone significant development from May 2024 to December 2024.

## Key Features

### 1. Student Management
- Enrollment system for new and existing students
- Support for transferee students with external subject handling
- Student information management
- Global search functionality for students by ID and Names
- Graduate student handling

### 2. Academic Management
- Class scheduling system
- Room management and scheduling
- Curriculum management
- Subject enrollment and management
- Grade handling and filtering
- Support for both regular and Senior High School (SHS) subjects

### 3. Administrative Features
- Multi-role system (Admin, Cashier, Registrar, Department Head)
- Assessment form generation and management
- Invoice generation and management
- Transaction tracking with QR codes
- Activity logging
- Backup system

### 4. Financial Management
- Tuition fee calculation
- Payment processing
- Transaction invoice numbering
- Digital signatures for verifications and transactions

### 5. Technical Implementations
- PWA (Progressive Web App) support
- Dark mode implementation
- Laravel Pulse integration for monitoring
- Docker support
- Database optimization with proper indexing
- Catppuccin Mocha theme integration

## Major Updates Timeline

### Recent Updates (November-December 2024)
- Refactored enrollment and assessment system
- Enhanced grade filtering and subject model
- Improved student management and notifications
- Fixed class assignment issues

### Mid-Phase Updates (September-October 2024)
- Added support for other school subjects
- Enhanced invoice logic
- Implemented export functionality for students
- Added Docker support
- Implemented class scheduling

### Early Phase Updates (May-August 2024)
- Initial system setup
- Basic enrollment functionality
- Room scheduling implementation
- Dashboard development for different roles
- Integration of Laravel Pulse
- Implementation of chat features

## Technical Stack

### Backend
- Laravel 11
- PHP 8.3+
- MySQL/PostgreSQL

### Frontend
- Inertia.js v3
- Vue.js
- Tailwind CSS

### DevOps
- Docker support
- GitHub Actions for CI/CD
- Automated labeling workflow

### Security Features
- Role-based access control
- Transaction verification with QR codes
- Digital signatures
- Session management

## Installation
