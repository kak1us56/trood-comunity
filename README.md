# Project Management App

This is a project and vacancy management system built as part of a technical assignment.  
It allows users to create, edit, delete, and view projects and associated vacancies.

## ✨ Features

### Projects Management
- View all projects divided into **Active** and **Completed** (based on deadline).
- Create new projects.
- Edit and delete existing projects.
- Automatic save on page edit.

### Vacancies Management
- Add vacancies to projects.
- Edit and delete vacancies.
- View created vacancies on the project details page (under **Hired people** section).

### Navigation
- Clicking on a project or vacancy opens a detailed page for editing.

---

## 🚀 Tech Stack

- **Next.js** (React framework)
- **TypeScript** (static typing)
- **Tailwind CSS** (utility-first CSS)
- **REST API** (provided backend)

---

## 🖥️ Running the Server Locally

Follow these steps to run the server on your local machine:

1. **Navigate to the server directory:**
   ```bash
   cd backend
2. **Install backend dependencies:**
    ```bash
    go mod tidy
3. **Run the server:**
    ```bash
    go run main.go
4. **In new terminal go to the frontend directory:**
    ```bash
    cd frontend
5. **Install frontend dependencies:**
    ```bash
    npm install
6. **Run the development server:**
    ```bash
    npx next dev

## 📋 Requirements
Make sure you have installed:

- **[Go](https://go.dev/doc/install) (version 1.17 or later)**
- **[Swag CLI](https://github.com/swaggo/swag) (for generating Swagger documentation, **optional**)**
- **Node.js (v18 or higher recommended)**
- **npm (comes with Node.js)**