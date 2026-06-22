# Adarsh Prep Public School — Frontend (Angular)

Is repo me **Angular frontend** aur **Node/Express backend** dono kaam karte hain. Ye README sirf frontend-focused hai, lekin backend ke bina contact form ka data save nahi hoga.

---

## 1) Project Overview

Ye frontend school website provide karta hai jisme:
- Home / Hero content
- Admission
- Notices (notices list)
- Events (events list)
- Gallery
- Teachers
- Contact page (contact form)
- About, Privacy Policy, Disclaimer
- Dashboard (admin panel)

Routes (src/app/app.routes.ts):
- `/` → Home
- `/admission` → Admission
- `/notices` → Notices
- `/events` → Events
- `/gallery` → Gallery
- `/teachers` → Teachers
- `/contact` → Contact
- `/about` → About
- `/privacy-policy` → Privacy Policy
- `/disclaimer` → Disclaimer
- `/dashboard` → Dashboard

---

## 2) Tech Stack
- **Frontend:** Angular
- **Backend communication:** REST API (backend: `/api/contact` etc.)

---

## 3) Prerequisites
- Node.js installed
- Backend server running (recommended for contact/dashboard features)

---

## 4) Setup (Frontend)

### Install dependencies
```bash
cd frontend
npm install
```

### Run development server
```bash
ng serve
```

Browser open karein:
- http://localhost:4200/

Auto-reload:
- Source files change hote hi app refresh ho jaati hai.

---

## 5) Build
```bash
ng build
```
Build artifacts:
- `frontend/dist/`

---

## 6) Tests
### Unit tests
```bash
ng test
```

### End-to-end (if configured)
```bash
ng e2e
```

> Note: Angular CLI default me E2E framework include nahi karta.

---

## 7) Contact Form (Important)

Frontend me contact form submit karta hai. Backend me contact route:
- **POST** `/api/contact/`
- **GET** `/api/contact/`
- **DELETE** `/api/contact/:id`

Backend side पर validation (based on controller):
- `name`, `email`, `phone`, `subject`, `message` required hain.

---

## 8) Folder Structure (Quick)

- `src/app/features/` → Home/Notices/Events/Gallery/Teachers modules
- `src/app/pages/` → About/Contact/Privacy Policy/Disclaimer pages
- `src/app/components/` → reusable components (e.g., contact-form, map)
- `src/app/dashboard/` → dashboard UI (admin)
- `src/app/shared/` → header/footer

---

## 9) Common Commands (Cheat Sheet)
- Run dev: `ng serve`
- Build: `ng build`
- Unit test: `ng test`
- Generate component: `ng generate component <name>`

---

## 10) Troubleshooting
- अगर app load nahi hoti:
  - `frontend` folder me `npm install` dubara run karein
  - port conflict ho to `ng serve --port <port>` use karein
- Contact submit fail:
  - backend server check karein
  - ensure frontend ke API base URL/backend URL match ho (config file me)

