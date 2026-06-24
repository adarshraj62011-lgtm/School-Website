# Adarsh Prep Public School - Web Portal

Welcome to the **Adarsh Prep Public School Portal** repository. This project is a full-stack web application designed for a school management system. It features an interactive **Angular frontend** and a **Node.js/Express backend** powered by **MongoDB**.

---

## 📂 Project Architecture & Directory Structure

The repository is organized into three main folders:

```text
├── frontend/             # Angular client application
├── backened/             # Express.js API server application
├── _data/                # Seed/Sample data (JSON files)
└── Steps.txt             # Step-by-step roadmap followed during development
```

### 1. Frontend (`frontend/`)
An **Angular 20** single-page application (SPA) styled with **Bootstrap 5** for responsiveness and styling.
- **Routing Pages:** Home, Admission (with on-the-fly PDF creation and print setup), Notices, Events, Gallery, Teachers, Contact Us, About Us, Privacy Policy, and Disclaimer.
- **Admin Dashboard:** Includes tabular dashboard views for managing Contacts, Events, Gallery, Notices, and Teachers.
- **Key Interactivity:**
  - **Admission Form:** Interactive form submission that allows printing or saving the application directly as a PDF via the browser.
  - **Contact Form:** Collects user enquiry details and formats a custom mail template using `mailto:` to send queries directly.

### 2. Backend (`backened/`)
A RESTful API built using **Node.js**, **Express**, and **Mongoose** to interact with a MongoDB database.
- **Endpoints:** Implements routes, middleware, and database models.
- **Models:** Defined using Mongoose schemas:
  - `Contact`: Handles visitor messages (name, email, phone, subject, message).
  - `Event`: Represents school events (title, description, date, location).
  - `Gallery`: Coordinates images by categories/dates.
  - `Notice`: Handles school alerts and categorized notices.
  - `Teacher`: Stores teacher profile information (name, bio, designation, subject, photo URL).
  - `User`: Admin dashboard user authentication (name, email, password hashes).

### 3. Data Seed (`_data/`)
Contains initial JSON datasets for initializing and testing database features:
- [contact.json](file:///e:/school/_data/contact.json)
- [event.json](file:///e:/school/_data/event.json)
- [gallery.json](file:///e:/school/_data/gallery.json)
- [notice.json](file:///e:/school/_data/notice.json)
- [teacher.json](file:///e:/school/_data/teacher.json)
- [user.json](file:///e:/school/_data/user.json)

---

## 🛠️ Tech Stack

- **Frontend:** Angular, Bootstrap 5, RxJS, HTML5, SCSS/CSS.
- **Backend:** Node.js, Express.js, Mongoose, JWT (jsonwebtoken), bcryptjs, dotenv, morgan, cors.
- **Database:** MongoDB (Compass or Atlas).
- **Process Management:** Nodemon (for development).

---

## ⚙️ Setup & Installation Instructions

Follow these instructions to run the frontend and backend servers locally on your machine.

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or MongoDB Atlas URI)
- Optional: MongoDB Compass (for database GUI)

---

### Step 1: Run & Configure Backend

1. Navigate to the backend directory:
   ```bash
   cd backened
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables. Create a `.env` file inside `backened/config/` directory:
   - Create path: `backened/config/.env`
   - Add the following content:
     ```env
     PORT=3000
     MONGO_URI=mongodb://127.0.0.1:27017/school_portal
     JWT_SECRET=your_jwt_secret_token_here
     ```
4. Start the backend development server:
   ```bash
   npm start
   ```
   *The server runs by default on `http://localhost:3000`.*

---

### Step 2: Run & Configure Frontend

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install Angular dependencies:
   ```bash
   npm install
   ```
3. Start the Angular dev server:
   ```bash
   npm run start
   ```
4. Access the web portal:
   - Open your browser and go to: `http://localhost:4200/`

---

## 🧪 Database Models Overview

Database schemas are located inside `backened/config/models/`:

| Model Name | Source File | Core Fields |
| :--- | :--- | :--- |
| **Contact** | [Contact.Model.js](file:///e:/school/backened/config/models/Contact.Model.js) | `name`, `email`, `phone`, `subject`, `message` |
| **Event** | [Event.Model.js](file:///e:/school/backened/config/models/Event.Model.js) | `title`, `description`, `shortDescription`, `date`, `location` |
| **Gallery** | [Gallery.Model.js](file:///e:/school/backened/config/models/Gallery.Model.js) | `title`, `imagesUrl` (array of URLs), `date` |
| **Notice** | [Notice.model.js](file:///e:/school/backened/config/models/Notice.model.js) | `title`, `description`, `date`, `category` |
| **Teacher** | [Teacher.Model.js](file:///e:/school/backened/config/models/Teacher.Model.js) | `name`, `subject`, `designation`, `bio`, `image` |
| **User** | [User.Model.js](file:///e:/school/backened/config/models/User.Model.js) | `name`, `email` (unique), `password` (hashed) |

---

## 📌 API Endpoint Map

Below are the routes currently registered or configured on the Express backend server:

| Route Path | Method | Controller Action | Description |
| :--- | :--- | :--- | :--- |
| `/api/contact` | **POST** | `createContact` | Save a new query from the contact form |
| `/api/contact` | **GET** | `getContacts` | Fetch list of submitted enquiries (Admin only) |
| `/api/contact/:id` | **DELETE** | `deleteContact` | Delete specific user enquiry (Admin only) |
| `/api/events` | **GET** | `getEvents` | Fetch lists of school events |
| `/api/events` | **POST** | `createEvent` | Create new school event (Admin only) |

---

## 🏁 Roadmap & Development Progress

- [x] Complete UI layouts (Pages & Features)
- [x] Responsive layout with Bootstrap 5
- [x] Local PDF generator on Admission Form page
- [x] Mongoose Database Schemas
- [x] Seed data JSON models
- [x] Contact Form mailto redirect integration
- [ ] Connect Angular Services with Express Backend API Endpoints (e.g. via Angular HttpClient)
- [ ] JWT authentication guard implementation in frontend router
