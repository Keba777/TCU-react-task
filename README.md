# My React.js Application

## Overview

This is a simple React.js application developed as part of a Frontend Developer assessment test. The application includes features such as user authentication, user profiles, and post management.

## Features

### User Authentication

- Implemented a login screen with email and password fields.
- Users can sign up for a new account using secure authentication methods.

### User Profiles

- Upon successful login, users can view their profile information (username and email) in a dedicated profile section/page.
- Users have the capability to edit their profile information.

### Post Management

- Created a screen to display a feed of posts from other users.
- Users can create, edit, and delete their own posts.
- Implemented infinite scrolling to dynamically load more posts as the user scrolls down the feed.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Firebase (Backend)
- @tanstack/react-query
- react-hook-form
- react-router-dom
- react-perfect-scrollbar

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Configure Firebase by adding the following environment variables to the `.env` file:

REACT_APP_FIREBASE_API_KEY=<Your Firebase API Key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
REACT_APP_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
REACT_APP_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
REACT_APP_FIREBASE_APP_ID=<Your Firebase App ID>

5. Run `npm start` to start the development server.
6. Access the application in your web browser at `http://localhost:3000`.

## Additional Notes

- The application has been tested for functionality and responsiveness across different devices and screen sizes.

## Link

- Deployed Application: [https://tcu-react-task.vercel.app/](https://tcu-react-task.vercel.app/)





