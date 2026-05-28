# 🚀 Dashboard SPA

A modern **Single Page Application (SPA)** built with **Vite**, **Vanilla JavaScript**, and **Tailwind CSS**.

---

# 📖 Project Description

Dashboard SPA is a frontend project focused on building a modern authentication flow and dashboard experience using modular JavaScript architecture.

The application includes:

* 🔐 User login interface
* 👤 User registration system
* 🧭 SPA navigation without page reloads
* 🎨 Responsive UI with Tailwind CSS
* ⚡ Fast development environment powered by Vite
* 🔔 Interactive alerts using SweetAlert2
* 📂 Modular folder structure for scalability

This project is ideal for learning:

* DOM manipulation
* SPA architecture
* Local storage/session storage
* JavaScript modularization
* Routing concepts
* UI component organization

---

# 🛠️ Technologies Used

| Technology      | Purpose                        |
| --------------- | ------------------------------ |
| Vite            | Development server and bundler |
| JavaScript ES6+ | Application logic              |
| Tailwind CSS    | Styling and responsive design  |
| SweetAlert2     | Beautiful alert popups         |
| JSON Server     | Fake REST API for development  |

---

# 📂 Project Structure

```bash
src/
│
├── assets/              # Images and static files
├── components/          # Reusable layout components
├── controllers/         # Application logic
├── views/               # UI views/pages
├── style.css            # Global styles
└── main.js              # Main entry point
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Blurtrace/dashboard_spa
```

---

## 2️⃣ Enter the project folder

```bash
cd dashboard_spa
```

---

## 3️⃣ Install dependencies

```bash
npm install
```

This command will install:

* Vite
* Tailwind CSS
* SweetAlert2
* JSON Server
* All required project dependencies

---

# 📦 Manual Package Installation

If you want to install everything manually:

## Install Vite

```bash
npm install vite@latest
```

## Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

## Install SweetAlert2

```bash
npm install sweetalert2
```

## Install JSON Server

```bash
npm install json-server
```

---

# 🗄️ JSON Server Setup

This project includes a local fake REST API powered by JSON Server.

JSON Server is used to simulate a backend environment during development.

It allows the application to:

* Store users
* Simulate authentication
* Test CRUD operations
* Work with API requests without a real backend

---

## 📁 Example Database File

Create a `db.json` file in the root of the project:

```json
{
  "users": []
}
```

---

## ▶️ Run JSON Server

Start the fake API server:

```bash
npx json-server db.json
```

By default, the server will run on:

```bash
http://localhost:3000
```

---

## ⚡ Run Frontend + JSON Server Together

Open two terminals:

### Terminal 1

```bash
npm run dev
```

### Terminal 2

```bash
npx json-server db.json
```

This will allow the frontend and fake backend to work simultaneously.

---

# ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

---

# 🏗️ Build for Production

```bash
npm run build
```

---

# 👀 Preview Production Build

```bash
npm run preview
```

---

# 💡 Example SweetAlert2 Usage

```js
import Swal from 'sweetalert2'

Swal.fire({
  title: 'Welcome!',
  text: 'Dashboard SPA is running successfully 🚀',
  icon: 'success'
})
```

---

# 🎯 Learning Goals

This project was created to practice:

* Modular JavaScript
* SPA development
* State persistence with localStorage
* Authentication flow simulation
* Responsive design
* Clean code organization

---

# 📸 Future Improvements

* ✅ Route protection
* ✅ Backend integration
* ✅ Authentication with JWT
* ✅ User profile page
* ✅ Dark mode
* ✅ API consumption with Axios
* ✅ Dashboard statistics

---

# 🤝 Contribution

Contributions are welcome.

Feel free to fork the project and improve it.

---

# 📄 License

This project is licensed under the MIT License.

---

### ⭐ If you like this project, give it a star!

Built with ❤️ using Vite + JavaScript
