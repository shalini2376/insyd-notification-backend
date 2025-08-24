### Notification System Backend

This is the backend of the Notification System project, built with Node.js, Express, and MongoDB.
It handles event creation, notification management, and serves API endpoints for the frontend.

---

### Features

1. Create events (POST /events)
2. Send notifications automatically when an event occurs
3. Fetch notifications for a user (GET /notifications/:userId)
4. Designed to handle high user traffic
5. Minimal, lightweight, and scalable 

---

### Tech Stack

1. Node.js – Backend runtime
2. Express.js – API framework
3. MongoDB – Database
4. Mongoose – ODM for MongoDB
5. CORS – Cross-origin requests handling

---

### Setup Instructions

1. Clone the Repository
git clone https://github.com/shalini2376/insyd-notification-backend.git
cd backend-repo

2. Install Dependencies
npm install

3. Set Environment Variables
Created a .env file in the root directory:

PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/insyd-notifications

4. Run Locally to Start the Server
node index.js
Server will be available at "http://localhost:5000"

5. API Endpoints
| Endpoint                 | Method | Description                             |
| ------------------------ | ------ | --------------------------------------- |
| `/events`                | POST   | Create a new event and notification     |
| `/notifications/:userId` | GET    | Fetch notifications for a specific user |

### Dependencies

1. express	- Backend framework
2. mongoose	- MongoDB ODM
3. cors	- Handle Cross-Origin requests
4. dotenv -	Manage environment variables
5. nodemon	- Development: auto-restart server

### 🔗 Deployment

Backend can be deployed on Render, Heroku, or Vercel.
