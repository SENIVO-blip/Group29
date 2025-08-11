This project is about building a smart, friendly, and helpful online healthcare system. Our platform lets patients meet real doctors through video, get fast initial advice from AI based on their symptoms, chat with doctors during emergencies, and easily upload medical reports. We aim to make healthcare more accessible, efficient, and connected. Goals

Give patients easy access to doctors online
Use AI (ChatGPT) to suggest possible illnesses based on symptoms
Let patients upload test results (PDFs)
Allow real-time chat with doctors
Keep a full medical history for each patient
Display doctor reviews and ratings Users There are three types of users:
Patients: Fill health forms, use AI, book doctors, upload reports, chat
Doctors: See patient info, consult via Zoom, chat, and view uploads
Technology Stack

Frontend: html,css,js , Tailwind CSS, Firebase SDK

Backend: Node.js with Express

Authentication: Firebase Auth

Database: Firebase Firestore

File Storage: Firebase Storage

AI: OpenAI's ChatGPT API

Real-time Messaging: WebSocket and Firestore

Video Calls: Zoom API

File Upload Handling: Multer

For message queue bulqmq Features Overview

Login/Register with Firebase Auth

After login: show onboarding health form

AI symptom checker powered by ChatGPT

Form-based doctor consultation flow

Automatic Zoom link generation

Real-time doctor-patient chat system

Upload and manage medical reports

Dashboard shows history, appointments, and reviews Homepage After Login Once logged in, the user lands on a warm and useful dashboard. It includes:

Welcome message and upcoming appointments

'Meet Our Doctors' section with profiles and ratings

Access to AI doctor feature

Patient reviews and testimonials

Snapshot of medical history (AI checks, past meetings, uploaded PDFs)

Quick action buttons (Upload, Chat, Book Doctor)

Emergency button for quick help Database Design /users/{userId} -> name, role, onboardingComplete /patients/{patientId} -> health profile, AI results, reports, consultations /doctors/{doctorId} -> name, specialty, rating /chats/{chatId}/messages -> chat history /reviews/{reviewId} -> patientId, doctorId, rating, comment Security

Authenticated access using Firebase Auth

Firestore rules to control data access

Storage rules to protect uploaded files

Encrypted communication via HTTPS

after owasp top 10 test verified Roadmap Phase 1: Setup Firebase + basic backend routes Phase 2: Patient onboarding and AI module Phase 3: Doctor consultation flow + Zoom Phase 4: Real-time chat + uploads Phase 5: UI polish, dashboard, reviews, and security Deliverables

html,css,js frontend with all pages and flows

Express backend for AI, Zoom, and uploads

Firebase setup with rules

Integrated chat, file uploads, and video

Well-documented, easy-to-use platform