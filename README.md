# Instamart

A web project for Instamart – an online grocery delivery platform with fast, reliable service and real-time updates.

## Tech Stack

This project is built with React + Vite, providing a minimal setup with Hot Module Replacement (HMR) and ESLint rules.

### Core Technologies
- React 18 with Vite for fast development and optimized builds
- Firebase for backend services and real-time updates
- Material-UI for responsive and modern UI components
- Redux for state management

### Features

- **Fast Refresh** using [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- **Real-time Order Tracking**
  - Live status updates for orders
  - Push notifications for order status changes
  - Delivery agent location tracking
- **User Authentication**
  - Secure Firebase authentication
  - Multiple sign-in methods
  - Protected routes for authenticated users
- **Order Management**
  - Intuitive shopping cart
  - Order history and reordering
  - Real-time inventory updates

## Project Structure

```
src/
  ├── components/     # React components
  │   ├── auth/       # Authentication components
  │   ├── common/     # Shared components
  │   ├── orders/     # Order-related components
  │   └── pages/      # Page components
  ├── firebase/       # Firebase configuration and services
  ├── store/          # Redux store setup and slices
  └── assets/         # Static assets
```

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up Firebase configuration:
   - Create a Firebase project
   - Copy your Firebase config to `src/firebase/config.js`

4. Start the development server:
```bash
npm run dev
```

## Development

The project includes several npm scripts for development:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## ESLint Configuration

The project includes ESLint for code quality. For production applications, we recommend enabling type-aware lint rules with TypeScript. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for TypeScript integration.

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase Hosting:
```bash
firebase deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
