# 📝 Todo List App

A full-stack task management application that allows users to sign up, log in, and manage their daily tasks. Built using Angular.js for the frontend and Express.js for the backend, with secure authentication and MongoDB for data persistence.

---

## 🔧 Technologies Used

### 🖥️ Frontend
- **Framework:** Angular.js
- **Language:** TypeScript
- **Styling:** CSS, HTML
- **Storage:** LocalStorage (session maintained for 1 hour)

### 🛠️ Backend
- **Runtime:** Node.js with Express.js
- **Authentication:** JSON Web Tokens (JWT)

### 🗄️ Database
- **MongoDB Atlas** (Cloud)
- **MongoDB Compass** (Local GUI for visualization)

### 🧪 API Testing
- **Postman**

---

## 🌐 Web Pages

### 1. Sign Up Page  
<img width="1470" alt="Sign Up Page" src="https://github.com/user-attachments/assets/b8584ab5-b7be-4724-83bd-b51ee41c5711" />

### 2. Sign In Page  
<img width="1470" alt="Sign In Page" src="https://github.com/user-attachments/assets/8523b0ee-2b89-4926-a5f0-345b5f8e2f45" />

### 3. Profile Page  
<img width="1470" alt="Profile Page" src="https://github.com/user-attachments/assets/555b6cd7-8454-44d8-a5d7-36c22c76fd1f" />

### 4. Home Page  
<img width="1470" alt="Home Page" src="https://github.com/user-attachments/assets/4faf9d3a-1ac3-4248-8e46-c1dfb4cfce06" />

### 5. Add Task  
<img width="1470" alt="Add Task" src="https://github.com/user-attachments/assets/f2e0c242-dae2-4fb4-8458-cbe661595337" />

### 6. View Task  
<img width="1470" alt="View Task" src="https://github.com/user-attachments/assets/bd507433-8786-40ac-b48b-6201d81072da" />

### 7. Delete Task  
<img width="1470" alt="Delete Task" src="https://github.com/user-attachments/assets/2155063c-961a-4b21-8d77-4b3780a8d67e" />

---

## 🚀 Features
- User authentication with JWT and session expiration
- CRUD operations for tasks
- LocalStorage-based session management
- Responsive Angular UI
- RESTful API integration

---

## 🔌 API Endpoints

### `/user/`
| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| POST   | `/register`    | Register a new user   |
| POST   | `/login`       | Authenticate user and return JWT |
| POST   | `/getprofile`  | Get user profile (JWT required) |

### `/todo/`
| Method  | Endpoint     | Description                 |
|---------|--------------|-----------------------------|
| POST    | `/getAll`    | Retrieve all todos for a user |
| POST    | `/`          | Create a new todo           |
| DELETE  | `/`          | Delete a todo by ID (from request body or query) |

> All `/todo/` routes are JWT-protected and require valid authentication headers.

---

## 📦 Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone git@github.com:your-username/todolist.git
   cd todolist
