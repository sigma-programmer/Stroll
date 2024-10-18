# Dynamic Question Assignment System

## Overview

The **Dynamic Question Assignment System** is a Node.js application designed to manage and rotate questions based on user regions. The system assigns questions on a configurable cycle, ensuring users in different regions receive the appropriate question set. This project utilizes **MongoDB** for data storage and follows a modular architecture to enhance maintainability and scalability.

## Features

- Region-specific question assignments.
- Configurable question cycle duration (default: 7 days).
- Efficient question retrieval based on the current cycle.
- Scalable architecture designed to support 100k daily active users and beyond.

## Tech Stack

- **Node.js**: Backend framework for API development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing questions and configurations.
- **Mongoose**: ORM for interacting with MongoDB.
- **dotenv**: Package for environment variable management.

## Folder Structure

project-root/ │ ├── controllers/ │ └── questionController.js │ ├── models/ │ ├── Question.js │ ├── Region.js │ ├── Cycle.js │ ├── routes/ │ └── questionRoutes.js │ ├── config/ │ └── db.js │ ├── services/ │ └── questionService.js │ ├── utils/ │ └── dateUtils.js │ ├── app.js ├── README.md ├── package.json └── .env


## Installation

Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:
env
Copy code
MONGO_URI=mongodb://localhost:27017/question_rotation
PORT=5000
Ensure to replace mongodb://localhost:27017/question_rotation with your actual MongoDB connection string if needed.

Start the server:

bash
Copy code
npm start
The server will run on http://localhost:5000.

API Documentation
Get Question for Region
Endpoint: /api/questions/:region
Method: GET
URL Params:
region: The region for which to fetch the question (e.g., Singapore, US).
Example Request
http
Copy code
GET http://localhost:5000/api/questions/Singapore
Example Response
json
Copy code
{
  "success": true,
  "question": "Question 1"
}
Error Response
In case of an error (e.g., region not configured):

json
Copy code
{
  "success": false,
  "message": "Region not configured for question cycles"
}
Testing the API with Postman
Open Postman and create a new GET request.
Enter the URL http://localhost:5000/api/questions/{region} (replace {region} with Singapore or US).
Click Send to receive the question for the specified region.
Database Structure
Questions Collection
json
Copy code
[
  {
    "region": "Singapore",
    "questionSet": ["Question 1", "Question 2", "Question 3"]
  },
  {
    "region": "US",
    "questionSet": ["Question 4", "Question 5", "Question 6"]
  }
]
Cycles Collection
json
Copy code
[
  {
    "region": "Singapore",
    "currentCycle": 1,
    "cycleDuration": 7,
    "nextCycleStart": "2024-10-23T19:00:00.000Z"
  },
  {
    "region": "US",
    "currentCycle": 1,
    "cycleDuration": 7,
    "nextCycleStart": "2024-10-23T19:00:00.000Z"
  }
]
Future Improvements
Implement authentication for secure access to the API.
Add an admin interface for managing questions and cycles.
Introduce caching mechanisms to improve performance under high load.
Implement logging and monitoring for better error handling and performance tracking.


### Notes:
- Be sure to update the GitHub repository URL in the "Clone the repository" section with your actual repository link.
- Customize the future improvements and acknowledgments as necessary.

Let me know if you need further adjustments or additional information!

