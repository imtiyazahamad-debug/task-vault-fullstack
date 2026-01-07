# 📌 TaskVault – Full Stack Task Management App

TaskVault is a **full-stack CRUD application** that allows users to create, view, and delete tasks.  
The project is built to demonstrate **clean architecture**, **modular backend design**, and **modern React best practices**.

## UI Screen:
<img width="804" height="528" alt="Screenshot 2026-01-07 184414" src="https://github.com/user-attachments/assets/28300124-296e-4d6e-adb7-9af749048e05" />
## Database UI:
<img width="922" height="798" alt="image" src="https://github.com/user-attachments/assets/061be14d-a7ee-4652-b432-07b5f2d74ce4" />

---

## 🚀 Tech Stack

### Backend
- **NestJS** (TypeScript)
- **MongoDB** (Mongoose)
- RESTful APIs
- Modular architecture
- DTO validation
- CORS enabled

### Frontend
- **React** (Vite)
- **TypeScript**
- **Tailwind CSS**
- Custom React Hooks
- Clean component structure

---

## ✨ Features
- Create tasks
- View all tasks
- Delete tasks
- Optimistic UI updates
- Environment-based configuration
- Strong typing across frontend & backend

---

## 🗂️ Project Structure

### Backend (NestJS)
```txt
src/
 ├── tasks/
 │    ├── dto/
 │    ├── schemas/
 │    ├── controller.ts
 │    ├── service.ts
 │    └── module.ts
 ├── app.module.ts
 └── main.ts

---

### Frontend (React)
```txt
src/
 ├── api/
 ├── hooks/
 ├── components/
 ├── pages/
 ├── types/
 ├── App.tsx
 └── main.tsx
---

### ⚙️ Environment Setup
#### Backend .env
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string

###Frontend .env
```env
VITE_API_BASE_URL=http://localhost:3000

---
### How to Run Locally
#### Backend
```bash
npm install
npm run start:dev

#### Frontend
```bash
npm install
npm run dev

---
👨‍💻 Author

Immu Khan
Full Stack Developer (Java | NestJS | React | MongoDB)
---
