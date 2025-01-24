## Planet Tracker App - 

**Introduction**

The Planet Tracker App is a web application designed for users to track and manage information about planets. Built with the MEN stack (MongoDB, Express.js, Node.js), this app empowers users to register, log in, and perform CRUD (Create, Read, Update, Delete) operations on celestial bodies.

**Features**

* **Authentication & Authorization:**
    * Secure session-based authentication ensures only authorized users can manage planets.
    * Express-session safeguards user credentials.
* **CRUD Functionality:**
    * Create new planets with details like name, size, and description.
    * View a comprehensive list of user-created planets.
    * Update existing planet information.
    * Delete planets that are no longer relevant.
* **UI/UX Design:**
    * Dynamic EJS templates provide a user-friendly experience.
    * Responsive layout with CSS adapts to various screen sizes.
    * Space-themed design with a captivating Mars horizon background.
* **Secure Data Handling:**
    * User passwords are hashed with bcrypt for enhanced security.
    * Environment variables protect sensitive information.
* **Accessibility:**
    * Intuitive navigation adheres to WCAG guidelines for accessibility.
    * Text elements prioritize readability with appropriate contrast.

**Technologies Used**

* **Backend:**
    * Node.js: JavaScript runtime environment for server-side operations.
    * Express.js: Web framework for building APIs and web applications.
    * MongoDB (via Mongoose): NoSQL database for storing planet data.
* **Frontend:**
    * EJS (Embedded JavaScript Templates): Enables server-side rendering of dynamic content.
    * CSS: Cascading Style Sheets for styling web page elements.
    * Bootstrap (optional): Utility classes for simplified layout creation.
* **Authentication:**
    * express-session: Manages user sessions and authentication.
    * bcrypt: Secure password hashing mechanism.
* **File Uploads (optional):**
    * multer: Middleware for handling multipart/form-data requests with file uploads.
* **Environment Variables:**
    * dotenv: Facilitates the use of environment variables for sensitive data.

**Installation**

1. Clone the repository:

```bash
git clone https://github.com/your-username/planet-tracker.git
cd planet-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ClusterName?retryWrites=true&w=majority
SESSION_SECRET=your_random_secret
```

4. Start the server:

```bash
npx nodemon app.js
```

5. Access the application in your web browser at http://localhost:3000.

**Usage**

1. **Authentication**
    * Register or log in on the homepage to create an account.
    * Only authenticated users can access the planets dashboard.

2. **Planet Dashboard**
    * **Create Planets:** Add new planets with details like name, size, and description.
    * **View Planets:** See a list of all the planets you've created.
    * **Edit Planets:** Modify details of existing planets.
    * **Delete Planets:** Remove planets you no longer wish to track.

3. **Logout**
    * Securely log out of the application to end your session.

**Folder Structure**

```
project/
├── app.js                 # Main application entry point
├── .env                   # Environment variables
├── models/                # Mongoose models for MongoDB
│   ├── User.js
│   └── Planet.js
├── routes/                # Express route handlers
│   ├── auth.js
│   └── planets.js
├── middleware/            # Custom middleware (e.g., authentication)
│   └── auth.js
├── views/                 # EJS templates for rendering pages
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── planets/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
├── public/                # Static assets (CSS, images)
│   ├── css/
│   │   └── styles.css
│   └── images/
└── package.json           # Project metadata and dependencies
```

This README preview provides a concise overview of the Planet Tracker App. Refer to the project's codebase for a more comprehensive understanding of the application's functionalities and implementation.
