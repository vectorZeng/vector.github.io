# My Web App

This project is a simple web application that allows users to log in and access their respective dashboards. Each user is assigned a username and password, and upon successful login, they are redirected to their dedicated dashboard.

## Project Structure

```
my-web-app
├── private
│   ├── dashboardA.html      # Dashboard for User A
│   ├── dashboardB.html      # Dashboard for User B
│   └── users.json           # User credentials storage
├── public
│   ├── login.html           # Login page for users
│   └── styles
│       └── main.css         # CSS styles for public pages
├── src
│   ├── app.js               # Main entry point of the application
│   ├── auth.js              # Authentication logic
│   └── routes.js            # Route definitions
├── package.json             # npm configuration file
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using npm:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to access the login page.

## Usage Guidelines

- Users can log in using the credentials stored in `private/users.json`.
- Upon successful login, users will be redirected to their respective dashboards:
  - User A will be directed to `dashboardA.html`.
  - User B will be directed to `dashboardB.html`.

## License

This project is licensed under the MIT License.