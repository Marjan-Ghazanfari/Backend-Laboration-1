const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('website'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

module.exports = app;