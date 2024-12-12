---
title: Web Client V2
description: Remade Version of the DCCP Portal Web Client
---

# DCCP Portal Web Client - Portal V2

## Overview
The DCCP Portal Web Client is a web-based application designed to provide a user-friendly interface for managing student records and other administrative tasks. The application is built using the Laravel framework and utilizes the Jetstream authentication system for user management. The Portal V2 is a major update to the previous version, featuring a modern and responsive design, improved performance, and enhanced security measures.


### Docker Integration (December 11, 2024)
- Added Docker support for containerized development and deployment
- Configured Docker environment for Laravel application

### Session Management and Security Updates (December 8, 2024)
#### Redis Integration
- Implemented Redis for session management
- Configured Redis for improved performance and scalability
- Added Redis connection settings for session, cache, and queue management

#### Session Security Enhancements
- Updated session configuration for improved cookie handling
- Implemented secure cookie settings
  - Enabled HTTP-only cookies
  - Set secure cookie flag for HTTPS
  - Configured SameSite cookie attribute
  - Implemented session encryption
- Created database migration for sessions table

#### Vercel Configuration
- Added Vercel-specific optimizations
- Updated composer.json with Vercel deployment commands
- Configured domain settings for Vercel deployment

### Application Layout and Feature Enhancements (December 7-8, 2024)
#### Authentication System
- Implemented multi-guard authentication system
  - Web guard for regular users
  - Admin guard for administrative access
- Enhanced password reset functionality
- Integrated Jetstream with Inertia.js stack

#### Profile Management
- Refactored Student Model relationships
- Enhanced Profile page functionality
- Improved dashboard features

### Technical Infrastructure Updates
#### Database Configuration
- Configured PostgreSQL connection settings
- Implemented database session driver
- Added migration for sessions table with:
  - User tracking
  - IP address logging
  - User agent storage
  - Activity timestamps

#### Cache Configuration
- Set up hierarchical cache system
- Configured cache prefix for multi-application support
- Implemented database caching as default store

#### Queue System
- Configured queue system with database driver
- Added Redis queue connection as alternative
- Implemented job batching capability

#### Security Measures
- Implemented strict PHP security settings
- Disabled dangerous PHP functions
- Configured OpCache for improved performance
- Set up error logging and reporting

## Key Features

### Authentication
- Multi-guard authentication system
- Secure session management
- Password reset functionality
- Remember me capability

### Session Management
- Redis-based session storage
- Secure cookie handling
- Session encryption
- Activity tracking

### Performance Optimizations
- OpCache configuration
- Redis caching
- Queue system for background jobs
- Database optimization

### Security Features
- HTTPS-only cookies
- HTTP-only cookie flags
- SameSite cookie protection
- IP tracking and logging
- User agent tracking
- Session encryption

## Environment Configuration

### PHP Configuration
- Memory limit: 512M
- Upload max filesize: 64M
- Post max size: 64M
- Max execution time: 180 seconds
- OpCache enabled with optimized settings

### Session Configuration
- Strict mode enabled
- Secure cookies enforced
- HTTP-only cookies
- Custom cookie lifetime settings
- Garbage collection optimized

### Database Configuration
- PostgreSQL optimizations
- Persistent connections enabled
- Proper error logging
- SSL mode support

## Deployment
- Vercel-optimized configuration
- Docker support for containerization
- Environment-specific optimizations
- Production-ready security settings
