# Express + TypeScript Server with MongoDB

This project is an Express application built with TypeScript. 
It connects to a MongoDB database using Mongoose and includes controllers for managing routes for authors, 
articles, comments, and string manipulation. The server is also configured with CORS and Body Parser middleware 
for handling JSON data and enabling cross-origin requests.

## Features

  * TypeScript: Strong typing and modern JavaScript features for better development experience and reliability.
  * MongoDB with Mongoose: Connects to a MongoDB database and provides an object-oriented approach to data modeling.
  * Express: Simple and efficient web server setup.
  * CORS: Allows cross-origin requests, specifically from http://localhost:3006.
  * Modular Controllers: Organizes routes for different resources, such as authors, articles, and comments.

## Prerequisites

  Node.js: Install Node.js for running the application.
  NPM: A package manager for Node.js.
  MongoDB: A MongoDB instance.

## Getting Started

### Clone the repository:

  ```bash

git clone https://github.com/Eallekors/blog_mongoose
cd <repository-name>
```
### Install dependencies:

```bash

npm install
```
### Configure database variables:

In the index.ts change the mongoose.connect(" ") line to your database connection link.
```bash
mongoose.connect("<your-connection-link>")

```

### Run the application:

Use the following command to start the server:

```bash

npm start
```
The server should now be running at http://localhost:3000. You should see a message confirming the connection to MongoDB if successful.
