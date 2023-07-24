// Create web server
// Run: node comments.js
// URL: http://localhost:3000/comments

// Load the express module
const express = require('express');

// Create an express app
const app = express();

// Load the comments module
const comments = require('./comments');

// Use the comments module
app.use('/comments', comments);

// Start the server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});