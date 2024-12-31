const express = require('express');
const router = express.Router();
const auth = require('./auth');

// Route for the login page
router.get('/login', (req, res) => {
    res.sendFile('public/login.html', { root: __dirname + '/../..' });
});

// Route for handling login submissions
router.post('/login', auth.authenticateUser, (req, res) => {
    const username = req.body.username;
    if (username === 'UserA') {
        res.redirect('/dashboardA.html');
    } else if (username === 'UserB') {
        res.redirect('/dashboardB.html');
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Route for User A's dashboard
router.get('/dashboardA', (req, res) => {
    res.sendFile('private/dashboardA.html', { root: __dirname + '/../..' });
});

// Route for User B's dashboard
router.get('/dashboardB', (req, res) => {
    res.sendFile('private/dashboardB.html', { root: __dirname + '/../..' });
});

module.exports = router;