# FUTURE_FS_01

## 🚀 Project Overview
This repository contains the **Full Stack Web Development Internship Project** for the **Future Interns** program.  
It includes a **React + Tailwind frontend** and a **Django REST backend**, with a functional contact form to receive messages directly via email.  

This project serves as a **portfolio-ready application** demonstrating modern full-stack development skills.


---

## 🎯 Key Features

### Frontend
- Responsive **portfolio website** built with React and Tailwind CSS.
- Sections include: Home, About, Projects, Resume, Contact.
- Smooth scroll and animated components for modern UI.
- Downloadable Resume section.
- Projects showcase with live demo and GitHub links.

### Backend
- Django REST API handles **contact form submissions**.
- Messages sent directly to email using **SMTP**.
- Secure storage of sensitive credentials using **`.env` file**.
- CORS enabled to connect frontend and backend safely.

---

## 🛠 Technologies Used

**Frontend**
- React.js
- Tailwind CSS
- JavaScript
- Vite

**Backend**
- Python
- Django + Django REST Framework
- PostgreSQL / SQLite (DB optional)
- SMTP for email handling

**Tools**
- Git & GitHub
- Postman (for API testing)
- VS Code

---

## 📝 Features in Action

- **Portfolio Website:** Interactive, responsive, visually appealing UI.
- **Project Section:** Showcase frontend/backend projects with tech stack and demo links.
- **Contact Form:** Submit messages securely; backend sends emails in real-time.
- **Resume Section:** Downloadable PDF and optional preview.

---

## 📂 How to Run the Project

### Frontend
1. Navigate to the frontend folder:
```bash
cd FUTURE_FS_01/frontend
Install dependencies:

npm install

And install other dependency inside the packege.json file


Start the development server:

npm run dev


Open the site in the browser at the provided URL.

Backend

Navigate to the backend folder:

cd FUTURE_FS_01/backend

Generate requirements.txt file:

venv\Scripts\activate
pip freeze > requirements.txt

Install Python dependencies:

pip install -r requirements.txt


Create .env file for environment variables (example in .env.example):

EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password


Run Django server:

python manage.py runserver

👨‍💻 Author

Nibretu Mengaw

GitHub: nibmangit

LinkedIn: Nibretu Mengaw

Location: Bahir Dar, Ethiopia

📌 Notes

Part of the Future Interns Full Stack Web Development Internship (Dec 2025 – Jan 2026).

Backend credentials are kept secure in .env and ignored in Git.

Frontend and backend are separate directories for clarity.
