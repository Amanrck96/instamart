# Instamart

Instamart is a modern online grocery delivery platform built with React and Firebase. It provides users with a seamless shopping experience, real-time order tracking, and secure authentication — all optimized for speed and simplicity.

## 🌐 Live Demo

Coming soon...

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Features

### 👤 User Features

- **Authentication**
  - Email/password login & registration
  - Google Sign-In
  - Protected routes (authenticated users only)
  - Admin access restrictions

- **Shopping Experience**
  - Browse products by category
  - Real-time product inventory updates
  - View detailed product information
  - Categories: Vegetables, Fruits, Dairy, Bakery, Beverages, Snacks, Household

### 🛒 Order System

- **Shopping Cart**
  - Add/remove items
  - Update item quantities
  - Instant price recalculations

- **Order Management**
  - Real-time order placement and tracking
  - Order history view
  - Push notifications for status changes

### 🛠️ Admin Dashboard

- **Product Management**
  - Add/edit/delete products with images
  - Manage prices and stock
  - Organize products by category

- **Order Processing**
  - Real-time order alerts
  - Update order statuses
  - Monitor order flow and traffic

## 🧱 Tech Stack

### Frontend

- React 18 (with Vite)
- Material-UI (MUI)
- Redux Toolkit

### Backend (Firebase)

- Firebase Authentication
- Firestore Database
- Firebase Storage
- Firebase Analytics
- Real-time Listeners

## 🗂 Project Structure

```
src/
  ├── components/
  │   ├── admin/      # Admin dashboard components
  │   ├── auth/       # Authentication components
  │   ├── common/     # Shared UI components
  │   ├── orders/     # Order management
  │   └── pages/      # Main page components
  ├── firebase/       # Firebase services
  ├── store/          # Redux store configuration
  └── assets/         # Static resources
```

## ⚙️ Getting Started

### Prerequisites

- Node.js 16+ 
- npm 7+
- Firebase account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amanrck96/instamart.git
   cd instamart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Firebase Setup:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication (Email/Password and Google Sign-In)
   - Set up Firestore Database
   - Configure Firebase Storage
   - Go to Project Settings > General > Add Web App
   - Copy the Firebase configuration and update `src/firebase/config.js`

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 🚀 Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Preview the build:**
   ```bash
   npm run preview
   ```

3. **Deploy to Firebase:**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init
   firebase deploy
   ```

## 🔒 Security

- Protected admin routes
- Secure Firebase configuration
- Real-time data validation
- Protected API endpoints
- Regular security audits

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
