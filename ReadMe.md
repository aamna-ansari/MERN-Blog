# MERN Blog

## Description
A full-stack blog application built using the MERN stack (MongoDB, Express.js, React, and Node.js). This project allows users to create, read, update, and delete blog posts with authentication and a rich text editor.

## Features
- User authentication (Sign up, Login, Logout)
- Create, edit, and delete blog posts
- Rich text editor for writing blogs
- Responsive UI using React & Tailwind CSS
- MongoDB as the database
- RESTful API using Express.js & Node.js

## Tech Stack
- **Frontend:** Ejs (Server Side Rendering)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)

## Installation
### Clone the repository:
```bash
git clone https://github.com/username/mern-blog.git
cd mern-blog
```

## API Routes
| Route            | Method | Description |
|-----------------|--------|-------------|
| `/api/auth/register` | POST | Register a new user |
| `/api/auth/login` | POST | Login user |
| `/api/posts` | GET | Fetch all blog posts |
| `/api/posts/:id` | GET | Fetch a single blog post |
| `/api/posts` | POST | Create a new blog post |
| `/api/posts/:id` | PUT | Update a blog post |
| `/api/posts/:id` | DELETE | Delete a blog post |


