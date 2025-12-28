# FUTURE_FS_01

## 🚀 Project Overview
This repository contains the **Full Stack Web Development Internship Project** for the **Future Interns** program.  
It is a **portfolio-ready full-stack application** built with a **React + Tailwind frontend** and a **Django REST backend**.

The project demonstrates **real-world development**, **API integration**, and **production deployment**, including a fully functional **contact form that sends emails in real time**.

---

## 🌍 Live Deployment

- **Frontend (Vercel):** https://future-fs-01-nib-man.vercel.app

---

## 🎯 Key Features

### Frontend
- Responsive **portfolio website** built with React and Tailwind CSS
- Sections: Home, About, Projects, Resume, Contact
- Smooth scrolling and modern UI animations
- Downloadable resume section
- Project showcase with live demo and GitHub links
- Contact form integrated with backend API

### Backend
- Django REST API to handle contact form submissions
- Sends emails using **SMTP (Gmail)**
- Input validation using serializers
- CORS configured for secure frontend-backend communication
- Environment-based configuration for production deployment

---

## 🛠 Technologies Used

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

### Backend
- Django
- Django REST Framework
- SQLite3 (development)
- SMTP (Email service)

### Deployment & Tools
- **Frontend:** Vercel
- **Backend:** Render
- Git & GitHub
- Postman(API testing)
- VS Code (writing code)

---

## 🔗 Frontend–Backend Integration

- The frontend communicates with the backend via **REST API** using Axios.
- CORS is properly configured to allow secure cross-origin requests.
- Contact form submissions trigger real-time email delivery.
- Backend environment variables are securely managed using:
- `.env` file (local development)
- Render environment variables (production)

---

## 📂 How to Run the Project 

### Frontend 

1. Navigate to the frontend folder:
   
```bash
cd FUTURE_FS_01/frontend
Install dependencies:

npm install

And install other dependencies inside the packege.json file


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

If Problem Occurs remove the venv and create again:
python -m venv venv

Then Install all the requirments like i described above.

👨‍💻 Author

Nibretu Mengaw

GitHub: nibmangit

LinkedIn: Nibretu Mengaw

Location: Bahir Dar, Ethiopia

📌 Notes

Part of the Future Interns Full Stack Web Development Internship (Dec 2025 – Jan 2026).

Backend credentials are kept secure in .env and ignored in Git.

Frontend and backend are separate directories for clarity.

