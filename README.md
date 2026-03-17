🦷 Dentist Booking Platform

This is a full-stack dentist booking web application where users can view available dentists and book appointments easily, while an admin can log in and view all booked appointments. The project is built using React (Vite) for the frontend and Node.js with Express for the backend, with MongoDB Atlas used as the database. The frontend is deployed on Vercel and the backend is deployed on Render.

Live Links: Frontend → https://dentist-booking-platform.vercel.app
 | Backend → https://dentist-booking-platform-wh8p.onrender.com

The application works by allowing the frontend (React) to send API requests to the backend (Express), which processes the request and interacts with MongoDB to store or retrieve data. All dentist data and appointment data are stored in the database and displayed dynamically on the UI.

Features include viewing multiple dentists, booking appointments through a form, storing appointment details in the database, and an admin login system using JWT authentication to securely access all appointments.

To run the project locally, first clone the repository using git clone https://github.com/SurajMuccu/dentist-booking-platform.git and navigate into the project folder. Then go to the backend folder, run npm install and npm run dev to start the server. After that, go to the frontend folder, run npm install and npm run dev to start the React application. You will also need to create a .env file in the backend with your MongoDB connection string and JWT secret.

Project structure is simple: the frontend folder contains the React application and UI components, while the backend folder contains routes, controllers, models, and database configuration.

Note: Since the backend is deployed on Render, it may take a few seconds to respond on the first request due to server cold start.
