// server.js
const express = require('express');
const sum = require("./sum");
const mul = require("./multiply")
require("dotenv").config();

const app = express();

app.get('/sum', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: sum(a, b) });
});

app.get('/multiply', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    
    res.json({ result: mul(a, b) });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing
