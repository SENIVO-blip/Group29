# Smart Online Healthcare System

## Overview
This project aims to build a smart, friendly, and helpful online healthcare system. Our platform allows patients to meet real doctors through video, receive fast initial advice from AI based on their symptoms, chat with doctors during emergencies, and easily upload medical reports. We strive to make healthcare more accessible, efficient, and connected.

## Goals
- Provide patients with easy access to doctors online.
- Use AI (ChatGPT) to suggest possible illnesses based on symptoms.
- Allow patients to upload test results (PDFs).
- Enable real-time chat with doctors.
- Maintain a complete medical history for each patient.
- Display doctor reviews and ratings.

## Users
There are three types of users:
- **Patients**: Fill health forms, use AI, book doctors, upload reports, chat.
- **Doctors**: Access patient info, consult via video, chat, and view uploads.
- **Admins**: Manage users and overall platform settings (if applicable).

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT with bcrypt
- **File Upload**: Multer (local storage, S3 optional)
- **AI**: OpenAI ChatGPT API
- **Chat**: Socket.io
- **Video Calls**: Jitsi Meet

## Features Overview
- Register/Login with JWT
- Onboarding form after login
- AI-powered symptom checker (ChatGPT)
- Form-based doctor booking and consultation
- Jitsi Meet video link generation
- Real-time doctor-patient chat (Socket.io)
- Upload/manage medical reports (Multer)
- Dashboard with history, appointments, reviews
- Emergency button for quick doctor access

## Homepage (Post Login)
- Welcome banner and appointment summary.
- “Meet Our Doctors” section with ratings.
- Access to AI doctor/symptom checker.
- Snapshot of medical history.
- Quick action buttons (Upload, Chat, Book Doctor).
- Emergency consultation access.

## Database Design (MongoDB Collections)
- **users**: `_id`, `name`, `email`, `passwordHash`, `role` (patient/doctor), `onboardingComplete`
- **patients**: `_id`, `userId` (ref: users), `healthProfile`, `aiResults`, `reportFiles`, `consultations`
- **doctors**: `_id`, `userId` (ref: users), `name`, `specialty`, `rating`
- **chats**: `_id`, `participants`, `messages`
- **reviews**: `_id`, `patientId`, `doctorId`, `rating`, `comment`

## Security
- All routes protected using JWT.
- Passwords hashed with bcrypt.
- File validation and secure upload handling.
- MongoDB Atlas security rules (IP whitelist, role-based access).
- HTTPS for encrypted communication.
- OWASP Top 10 verification.

## Roadmap
- **Phase 1**: Setup Node.js backend + MongoDB User authentication (JWT + bcrypt) (done)
- **Phase 2**: Onboarding form AI symptom checker with ChatGPT API (done)
- **Phase 3**: Doctor booking flow Jitsi Meet video integration
- **Phase 4**: Real-time chat with Socket.io File upload with Multer
- **Phase 5**: Dashboard + history tracking Review system UI polish + security tests

## Deliverables
- HTML/CSS/JS frontend styled with Tailwind
- RESTful Express backend with all APIs
- JWT-based auth and protected routes
- MongoDB Atlas with well-structured collections
- Multer file uploads
- Integrated ChatGPT AI and Jitsi video
- Socket.io real-time messaging
- Complete medical dashboard
- Code and API documentat
