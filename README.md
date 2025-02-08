# Pomodoro Timer API

A robust REST API for managing Pomodoro timer sessions with Firebase authentication. Track your productivity and focus time efficiently.

## Features

- User Authentication with Firebase
- Session Management
- Error Handling Middleware
- CORS Enabled
- RESTful Architecture

## Tech Stack

- Node.js
- Express.js
- Firebase Admin SDK
- Body Parser
- CORS

## Prerequisites

- Node.js (v14 or higher)
- Firebase Project with Admin SDK credentials

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pomoapi
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase credentials in `config/serviceAccount.json`

4. Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000` (or the specified PORT in environment variables).

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
PORT=3000
```

## API Endpoints

Documentation for available endpoints coming soon.

## License

ISC

## Contributing

Feel free to open issues and pull requests for any improvements.
