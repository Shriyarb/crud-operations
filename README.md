# E-Commerce Backend using Express.js

## Overview

This project is a simple E-Commerce Backend developed using **Node.js** and **Express.js**. The application demonstrates CRUD (Create, Read, Update, Delete) operations for three main entities:

* Users
* Products
* Orders

The project follows a layered architecture using **Module**, **Handler**, and **Service** files to maintain clean code organization and separation of concerns.

---

## Features

### User Management

* Create a new user
* View all users
* View a specific user
* Update user details
* Delete a user

### Product Management

* Create a new product
* View all products
* View a specific product
* Update product details
* Delete a product

### Order Management

* Create a new order
* View all orders
* View a specific order
* Update order details
* Delete an order

---

## Project Structure

```text
EcommerceBackend/
│
├── server.js
│
├── user.module.js
├── user.handler.js
├── user.service.js
│
├── product.module.js
├── product.handler.js
├── product.service.js
│
├── order.module.js
├── order.handler.js
└── order.service.js
```

---

## Architecture

### Module Layer

Defines API routes and maps them to handlers.

### Handler Layer

Processes incoming requests and sends responses.

### Service Layer

Contains business logic and data operations.

---

## Technologies Used

* Node.js
* Express.js
* JavaScript

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd EcommerceBackend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Server runs on:

```text
http://localhost:3000
```

---

## API Endpoints

### Users

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| GET    | /users     | Get all users  |
| GET    | /users/:id | Get user by ID |
| POST   | /users     | Create user    |
| PUT    | /users/:id | Update user    |
| DELETE | /users/:id | Delete user    |

### Products

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | /products     | Get all products  |
| GET    | /products/:id | Get product by ID |
| POST   | /products     | Create product    |
| PUT    | /products/:id | Update product    |
| DELETE | /products/:id | Delete product    |

### Orders

| Method | Endpoint    | Description     |
| ------ | ----------- | --------------- |
| GET    | /orders     | Get all orders  |
| GET    | /orders/:id | Get order by ID |
| POST   | /orders     | Create order    |
| PUT    | /orders/:id | Update order    |
| DELETE | /orders/:id | Delete order    |

---

## Sample Data

### User

```json
{
  "id": 1,
  "name": "Shri",
  "email": "shri@gmail.com"
}
```

### Product

```json
{
  "id": 101,
  "name": "Laptop",
  "price": 50000,
  "stock": 10
}
```

### Order

```json
{
  "id": 1001,
  "userId": 1,
  "productId": 101,
  "quantity": 2
}
```

---

## Learning Outcomes

* Understanding Express.js routing
* Building RESTful APIs
* Implementing CRUD operations
* Applying layered architecture
* Managing data using JavaScript arrays
* Structuring backend projects effectively

---

## Author

Developed as part of Express.js and Backend Development practice.
