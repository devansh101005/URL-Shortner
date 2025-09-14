# URL Shortener

A simple and efficient URL shortening service built with Node.js, Express, and Drizzle ORM. This application allows users to create short, manageable links from long URLs, complete with user authentication.

## Features

-   **User Authentication**: Secure registration and login system using JSON Web Tokens (JWT).
-   **URL Shortening**: Convert long, cumbersome URLs into short, easy-to-share links.
-   **Redirection**: Automatically redirects short URLs to their original destination.
-   **Modern Tech Stack**: Built with a modern, efficient, and scalable technology stack.

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: PostgreSQL
-   **ORM**: Drizzle ORM
-   **Package Manager**: pnpm
-   **Containerization**: Docker (via `docker-compose.yml`)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

-   [Node.js](https://nodejs.org/en/) (v18 or later recommended)
-   [pnpm](https://pnpm.io/installation)
-   [Docker](https://www.docker.com/products/docker-desktop/) (for running a PostgreSQL instance)

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/devansh101005/URL-Shortner.git
cd URL-Shortner
```

### 2. Install Dependencies

Install the project dependencies using `pnpm`.

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following environment variables. Replace the placeholder values with your actual database credentials and a secure JWT secret.

```env
# .env

# PostgreSQL connection string
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>"

# JWT Secret for token signing
JWT_SECRET="your-super-secret-jwt-key"

# Port for the application
PORT=3000
```

**Note**: If you are using the provided `docker-compose.yml`, your `DATABASE_URL` will be `postgresql://docker:docker@localhost:5432/docker`.

### 4. Start the Database (with Docker)

If you have Docker installed, you can easily start a PostgreSQL container by running:

```bash
docker-compose up -d
```

This will start a PostgreSQL server on `localhost:5432`.

### 5. Run Database Migrations

Drizzle ORM uses migration files to keep the database schema in sync with your models.

First, generate the migration files based on your schema:

```bash
npx drizzle-kit generate:pg
```

Then, apply the migrations to your database. You will need a migration script (`migrate.js`) for this. If you don't have one, you can create it and run it:

```bash
# This command assumes you have a migrate.js script to run Drizzle migrations
node migrate.js
```

### 6. Run the Application

Start the development server using the following command:

```bash
pnpm run dev
```

The application should now be running on `http://localhost:3000`.

## API Endpoints

Here are the main API endpoints available:

### User Routes

-   `POST /api/users/register`: Register a new user.
-   `POST /api/users/login`: Log in an existing user and receive a JWT.

### URL Routes

-   `POST /api/urls/shorten`: Create a new short URL (requires authentication).
-   `GET /:shortId`: Redirect to the original long URL.

---

Feel free to contribute to this project by opening issues or pull requests.

