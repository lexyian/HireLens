# HireLens

HireLens is an interview practice web application for students, fresh graduates, and job seekers.

The goal of the project is to provide a structured place where users can practice answering interview questions through typing or browser speech transcription, review their responses, and eventually receive contextual AI feedback.

The project is being developed in stages so that the core interview experience works reliably before AI, authentication, and database features are introduced.

## Current Stage

**Stage 1 — Working Practice Application**

Stage 1 uses preset interview question banks and does not generate AI feedback.

## Stage 1 Features

- Interview setup
- Job role selection
- Interview type selection
- Difficulty selection
- 5, 8, or 10 question sessions
- Role-specific technical question banks
- Behavioral question banks
- Mixed interview sessions
- One-question-at-a-time interview flow
- Session progress indicator
- Editable answer field
- Browser speech recognition
- Live transcription
- Typed-answer fallback
- Microphone start and stop controls
- Word count
- Answer timer
- Finish Answer control
- Next Question control
- End Session confirmation
- Microphone permission and service error handling
- Results summary
- Completed question and answer review
- Total word count
- Answering-duration summary
- Approximate filler phrase count
- Basic practice checks
- Responsive desktop and mobile layout
- Keyboard and focus accessibility

## Important Stage 1 Limitation

The current practice checks are **not AI feedback**.

HireLens does not currently evaluate:

- answer relevance
- technical correctness
- interview performance
- confidence
- personality
- emotions
- hiring suitability

The Stage 1 results only provide simple practice information such as:

- answer length
- answering duration
- approximate filler phrase usage

Answering duration includes time spent thinking, typing, using speech transcription, and editing. It should not be interpreted as speaking time.

## Job Roles

Stage 1 includes question banks for:

- Frontend Developer
- Software Developer
- QA Engineer
- IT Support Specialist

## Interview Types

### Behavioral

Questions about previous experiences, teamwork, communication, problem solving, feedback, priorities, and decision making.

### Technical

Role-specific technical questions based on the selected job role.

### Mixed

A combination of technical and behavioral questions.

## Difficulty

### Easy

Focuses on fundamentals and common entry-level questions.

### Medium

Uses deeper explanations, troubleshooting, and scenario-based questions.

### Hard

Uses more complex technical situations, trade-offs, system thinking, and decision-making scenarios.

Long 10-question sessions may use a small number of questions from the nearest difficulty level when the primary preset bank has been exhausted.

## Technologies Used

- HTML
- CSS
- Vanilla JavaScript
- Web Speech API / SpeechRecognition
- DOM manipulation
- Browser APIs

Stage 1 does not require a framework, backend, database, or API key.

## Project Structure

```text
HireLens/
├── index.html
├── style.css
├── script.js
└── README.md
