# Fast Curriculum API

Fast Curriculum is an innovative platform that assists job seekers in creating personalized resumes tailored to specific job descriptions. By inputting the job description, the system generates a customized resume using the user's information, optimizing their chances in the competitive job market. This repository contains the backend API built with Node.js, NestJS, and GraphQL.

## Table of Contents

- [Fast Curriculum API](#fast-curriculum-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Features

- **User Authentication and Authorization**: Secure login and registration with JWT.
- **Profile Management**: Users can manage their personal information, work experience, education, and skills.
- **Resume Generation**: Integration with OpenAI to generate customized resumes based on job descriptions.
- **Credit System**: Users can purchase credits via Mercado Pago to generate resumes.
- **Resume Analysis**: Analyze existing resumes and provide suggestions for improvement.
- **Notifications**: Real-time notifications and email alerts for important actions.
- **API Gateway**: Centralized API gateway for routing and security.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **NestJS**: Progressive Node.js framework for building efficient and scalable server-side applications.
- **GraphQL**: Query language for APIs, providing a more efficient and flexible alternative to REST.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **JWT (jsonwebtoken)**: For authentication and authorization.
- **Bcrypt**: Library to help hash passwords.
- **Class Validator and Class Transformer**: For validating and transforming request data.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Nodemon**: Utility that monitors for changes in source code and automatically restarts the server.
- **Jest**: JavaScript testing framework.
- **Docker**: Containerization platform for consistent development and deployment environments.
- **Mercado Pago SDK**: Integration for payment processing.
- **OpenAI API**: Integration for resume generation and analysis.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **Docker** and **Docker Compose** (for containerization)
- **PostgreSQL** database
- **OpenAI API Key**
- **Mercado Pago Credentials**

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/fast-curriculum.git
    cd fast-curriculum
    Install dependencies:
    ```

    ```bash

    npm install

    ```

    Configure Environment Variables:

Create a .env file in the root directory and add the following variables:

env
Copiar código
DATABASE_URL=postgresql://user:password@localhost:5432/fastcurriculum
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
MERCADOPAGO_ACCESS_TOKEN=your_mercadopago_access_token
Replace the placeholders with your actual configuration values.

```bash
npm run start:dev
```

Production Mode:

```bash
npm run build
npm run start:prod
```

Using Docker:

Make sure Docker and Docker Compose are installed.

```bash
docker-compose up -d
```

This will set up the application along with the PostgreSQL database.

API Documentation
The Fast Curriculum API uses GraphQL. Once the application is running, you can access the GraphQL Playground at:

```bash
http://localhost:3000/graphql
```

Here you can explore the available queries, mutations, and subscriptions.

License
This project is licensed under the MIT License. See the LICENSE file for details.
