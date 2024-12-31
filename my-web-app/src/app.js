const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Set view engine
app.set('view engine', 'html');

// Routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});