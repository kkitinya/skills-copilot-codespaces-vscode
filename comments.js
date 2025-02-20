// Create we server
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Data
const comments = [
    { id: 1, username: 'Toby', comment: 'That is a great post!' },
    { id: 2, username: 'John', comment: 'I am so happy to read this!' },
    { id: 3, username: 'Sarah', comment: 'This is the best post ever!' }
];

// Routes
// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === parseInt(id));
    res.json(comment);
});

// Create a comment
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ id: comments.length + 1, username, comment });
    res.json(comments);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { username, comment } = req.body;
    const commentIndex = comments.findIndex(comment => comment.id === parseInt(id));
    comments[commentIndex] = { id: parseInt(id), username, comment };
    res.json(comments);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const commentIndex = comments.findIndex(comment => comment.id === parseInt(id));
    comments.splice(commentIndex, 1);
    res.json(comments);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});