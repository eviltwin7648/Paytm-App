# Paytm Clone Application

A modern payment application built with Next.js, TypeScript, and Prisma, featuring user authentication, money transfers, and bank integration.

## Features

- 🔐 Secure user authentication using NextAuth.js
- 💰 Money transfer functionality
- 💳 Balance management
- 📊 Transaction history
- 🏦 Bank integration via webhooks
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payment Processing**: Custom bank webhook integration

## Project Structure

```
├── apps/
│   ├── user-app/          # Main Next.js application
│   └── bank-webhook/      # Bank integration service
├── packages/
│   ├── db/               # Shared database package
│   └── ui/               # Shared UI components
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Paytm-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in the root directory
   - Add the following required variables:
     ```
     DATABASE_URL="your-postgresql-url"
     NEXTAUTH_URL="http://localhost:3000"
     JWT_SECRET="your-secret-key"
     ```

4. Set up the database:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Features in Detail

### User Authentication
- Phone number and password-based authentication
- Secure session management
- Protected routes

### Money Transfer
- View current balance
- Add money to wallet
- Transfer money between users
- Transaction history

### Bank Integration
- Webhook-based payment processing
- Secure payment verification
- Transaction status tracking

## Development

- `npm run dev`: Start development server
- `npm run build`: Build the application
- `npm start`: Start production server
- `npm run lint`: Run linting
- `npm run db:push`: Push database schema changes

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

