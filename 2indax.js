const express = require('express');
const app = express();

// Initialize the counter
let counter = 0;

// Endpoint to get the current counter value
app.get('/', (req, res) => {
    res.json({ counter });
});

// Endpoint to increment the counter
app.get('/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

// Endpoint to decrement the counter
app.get('/decrement', (req, res) => {
    counter--;
    res.json({ counter });
});

// Define the port and start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
