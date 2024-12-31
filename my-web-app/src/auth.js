const fs = require('fs');
const path = require('path');

// Load user credentials from users.json
const usersFilePath = path.join(__dirname, '../private/users.json');
let users = {};

fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading users.json:', err);
        return;
    }
    users = JSON.parse(data);
});

// Function to authenticate user
function authenticate(username, password) {
    const user = users[username];
    if (user && user.password === password) {
        return true; // Authentication successful
    }
    return false; // Authentication failed
}

// Function to get user dashboard based on username
function getUserDashboard(username) {
    if (username === 'UserA') {
        return 'dashboardA.html';
    } else if (username === 'UserB') {
        return 'dashboardB.html';
    }
    return null; // No dashboard found
}

module.exports = {
    authenticate,
    getUserDashboard,
};