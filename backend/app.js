const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rootpassword',
    database: 'test_db'
});

// Test route to check API is running
app.get('/api', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ users: results });
        }
    });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

