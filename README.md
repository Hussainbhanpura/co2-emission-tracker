# QuickChat - Instant Chat Application

QuickChat is a modern web application that allows users to create secure chat links and start conversations in seconds. Built with Next.js for the frontend and Node.js for the backend, QuickChat provides a seamless and responsive chat experience.

## Features

- **Instant Chat Links**: Create secure chat links and share them with anyone to start conversations immediately
- **User Authentication**: Secure login and registration system
- **Real-time Messaging**: Instant message delivery using WebSocket technology
- **Responsive Design**: Beautiful UI that works on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and custom UI components

## Project Structure

The project is divided into two main parts:

- **front**: Next.js frontend application
- **server**: Node.js backend server

### Frontend Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Radix UI Components
- NextAuth.js for authentication

### Backend Technologies

- Node.js
- TypeScript
- Express
- WebSockets for real-time communication

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/Hussainbhanpura/co2-emission-tracker.git
   cd co2-emission-tracker
   ```

2. Install frontend dependencies
   ```
   cd front
   npm install
   ```

3. Install backend dependencies
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the frontend development server
   ```
   cd front
   npm run dev
   ```

2. Start the backend server
   ```
   cd server
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Environment Variables

### Frontend (.env.local)

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Backend (.env)

```
PORT=4000
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
```

## Deployment

The application can be deployed to various platforms:

- Frontend: Vercel, Netlify, or any static hosting
- Backend: Heroku, Railway, or any Node.js hosting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
