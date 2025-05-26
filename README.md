# 🎬 YouTube Clone

A full-stack YouTube clone application built using **React**, **TypeScript**, **Node.js**, and **Express**. This project replicates some of the core functionalities of YouTube including video browsing, searching, and playing, providing a modern and responsive UI.

🚀 **Live Demo**: [youtube-frontend-d3ou.onrender.com](https://youtube-frontend-d3ou.onrender.com)

---

## 📌 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## ✅ Features

- 🔍 Search for videos
- 🎥 Watch videos using embedded players
- 🧭 Browse trending or default videos
- ⚡ Responsive and modern UI
- 🔁 Backend API integration with dynamic data
- 🧱 Scalable architecture

---

## 🛠 Tech Stack

**Frontend**:
- React
- TypeScript
- HTML/CSS
- Axios

**Backend**:
- Node.js
- Express
- REST API

**Deployment**:
- Render (for hosting frontend and backend)

**Languages**:
- TypeScript (73.3%)
- JavaScript (24.1%)
- HTML (1.5%)
- CSS (1.1%)

---

## 🗂 Project Structure
```C#
youtube/
├── backend/                # Backend source code
│   ├── controllers/        # Route logic (optional)
│   ├── routes/             # Express routes
│   ├── models/             # Data models (if using DB)
│   ├── middleware/         # Auth, logging, etc.
│   ├── utils/              # Utility functions
│   ├── config/             # Environment and config
│   ├── index.js            # Entry point
│   └── package.json        # Backend dependencies
│
├── frontend/               # Frontend source code
│   ├── public/             # Static assets
│   └── src/
│       ├── assets/         # Images, videos, etc.
│       ├── components/     # Shared UI components
│       ├── pages/          # Individual screens/views
│       ├── services/       # API calls
│       ├── utils/          # Frontend utilities
│       ├── App.tsx         # App root
│       └── index.tsx       # React DOM entry
│   └── package.json        # Frontend dependencies
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rogshivam/youtube.git
   cd youtube
    ```
2. Install dependencies:
  Frontend:
    ```bash 
    cd frontend
    npm install
    ```
    Backend:
    
    ```bash
    cd ../backend
    npm install
    ```
## ▶️ Running the App
**1. Start the backend server:**

```bash

cd backend
npm start
```
**Start the frontend:**

```bash
cd ../frontend
npm start
```
**Frontend will run at: http://localhost:3000**

**Backend will run at: http://localhost:5000 (or as configured)**

## 🖼 Screenshots
(https://res.cloudinary.com/dn0bmsj49/image/upload/v1746998202/o56hpqlsuischsvpepaf.png)

Home Page	Video Player

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project

2. Create your Feature Branch (git checkout -b feature/AmazingFeature)

3. Commit your Changes (git commit -m 'Add amazing feature')

4. Push to the Branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See LICENSE for more information.

## 📫 Contact
Developer: Shivam
GitHub: @Rogshivam



