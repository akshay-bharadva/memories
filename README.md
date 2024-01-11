# Memories - A Full-Stack MERN Application

Memories is a full-stack social media application built with the MERN stack (MongoDB, Express, React, Node.js). It provides a platform for users to post, share, and interact with interesting events and memories from their lives. The application features a clean, modern UI built with Material-UI and is powered by a robust REST API.

## Snapshots

| Home Page | Post Detail |
| :---: | :---: |
| ![Snapshot#1](snaps/home-page.png) | ![Snapshot#2](snaps/post-detail.png) |
| **Login** | **Sign Up** |
| ![Snapshot#3](snaps/login.png) | ![Snapshot#4](snaps/signup.png) |
| **Create Memory** | **Comment on Post** |
| ![Snapshot#5](snaps/create-memories.png) | ![Snapshot#6](snaps/comment-post.png) |

## Features

-   **User Authentication**: Secure user registration and login system using JSON Web Tokens (JWT).
-   **CRUD Operations**: Full Create, Read, Update, and Delete functionality for posts.
-   **Rich Content**: Posts include a title, message, tags, and an image upload feature (Base64).
-   **Social Interaction**: Users can like and comment on posts created by others.
-   **Powerful Search**: Search for memories by title.
-   **Pagination**: Efficiently browse through a large number of posts with server-side pagination.
-   **Detailed View**: Click on any post to view its dedicated details page.
-   **Responsive Design**: A user-friendly and responsive interface that works on various screen sizes.

## Tech Stack

### Backend
-   **Node.js**: JavaScript runtime environment.
-   **Express.js**: Web application framework for Node.js.
-   **MongoDB**: NoSQL database for storing application data.
-   **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
-   **JSON Web Tokens (JWT)**: For secure user authentication and authorization.
-   **bcrypt**: Library for hashing user passwords.
-   **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
-   **Dotenv**: For managing environment variables.

### Frontend
-   **React**: JavaScript library for building user interfaces.
-   **Redux**: State management library with Redux Thunk for asynchronous actions.
-   **React Router**: For client-side routing and navigation.
-   **Material-UI**: A popular React UI framework for faster and easier web development.
-   **Axios**: Promise-based HTTP client for making API requests.
-   **Moment.js**: For parsing, validating, manipulating, and displaying dates and times.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or later recommended)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
-   [MongoDB](https://www.mongodb.com/try/download/community) installed and running, or a MongoDB Atlas account.

### Installation & Setup

1.  **Clone the repository:**
    ```shell
    git clone https://github.com/akshay-bharadva/memories
    cd memories
    ```

2.  **Set up the Backend:**
    -   Navigate to the backend directory:
        ```shell
        cd back
        ```
    -   Create a `.env` file in the `back` directory and add your environment variables. See the [Environment Variables](#environment-variables) section below for details.
    -   Install backend dependencies:
        ```shell
        npm install
        ```
    -   Start the backend server (runs on `http://localhost:5001` by default):
        ```shell
        npm start
        ```

3.  **Set up the Frontend:**
    -   In a new terminal, navigate to the frontend directory:
        ```shell
        cd front
        ```
    -   Install frontend dependencies:
        ```shell
        npm install
        ```
    -   Start the frontend development server (runs on `http://localhost:3000`):
        ```shell
        npm start
        ```

The application should now be running. Open your browser and navigate to `http://localhost:3000`.

### Environment Variables

The backend requires a `.env` file for configuration. Create a file named `.env` in the `back` directory with the following content:

```env
# The connection string for your MongoDB database (local or Atlas)
MONGODB_CONNECTION_URL=mongodb://localhost:27017/memories

# The port for the backend server to run on
SERVER_PORT=5001
```

**Note:** The application uses a hardcoded JWT secret (`'test'`). For a production environment, it is highly recommended to replace this with a strong, secret key stored in your `.env` file.