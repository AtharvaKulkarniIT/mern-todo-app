# MERN TODO List App

This is a TODO List application built using the MERN stack. It allows users to manage their tasks effectively.

## Prerequisites

Before running the application, ensure you have the following installed:
- Node.js and npm (Node Package Manager)
- MongoDB
- MongoDB Compass (for database management)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/AtharvaKulkarniIT/mern-todo-app.git
```

### 2. Install dependencies

```bash
cd mern-todo-app

# Split the terminal :

# Install backend dependencies
cd todo_backend
npm install

# Install frontend dependencies
cd todo_frontend
npm install
```

### 3. MongoDB Setup

- Open MongoDB Compass
- Create a new database named `Todo`
- Inside the `Todo` database, create a collection named `tasks`

### 4. Server setup for database connection

```bash
PORT=5000  # Port number for the server (you can change it if needed)
MONGO_URI=mongodb://127.0.0.1:27017/Todo  # MongoDB connection URI
```

### 5. Running the App

```bash
# Start the server (from the 'todo_backend' directory)
npm start

# Start the client (from the 'todo_frontend' directory)
npm start
```

The server will run on `http://localhost:5000` and the client on `http://localhost:3000`.

## Usage

- Open your web browser and go to `http://localhost:3000`.
- You can add tasks, mark them as completed or delete them.

## Contributing

Feel free to contribute to this project by submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Sample output
![MERN TODO List App](https://drive.google.com/uc?id=1RZEV9e3LKEoEFbBmCfNFjEb_PU8uIfow)

