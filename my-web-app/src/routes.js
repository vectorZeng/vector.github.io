const express = require('express');
const router = express.Router();
const auth = require('./auth');

// Middleware to authenticate user
function authenticateUser(req, res, next) {
    const { username, password } = req.body;
    if (auth.authenticate(username, password)) {
        req.session.username = username;
        next();
    } else {
        res.status(401).send('Invalid username or password');
    }
}

// Route for the login page
router.get('/login', (req, res) => {
    res.sendFile('public/login.html', { root: __dirname + '/../..' });
});

// Route for handling login submissions
router.post('/login', authenticateUser, (req, res) => {
    const username = req.session.username;
    const dashboard = auth.getUserDashboard(username);
    if (dashboard) {
        res.redirect(`/${dashboard}`);
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