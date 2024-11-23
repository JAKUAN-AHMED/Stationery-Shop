# Stationery Shop B4A2V5 📚✏️

## **Project Overview**
Welcome to **Stationery Shop B4A2V5**, a modern Express.js application built with TypeScript and MongoDB to manage a stationery store. The system handles product management, inventory tracking, order processing, and revenue calculation. This project integrates **Mongoose** for efficient database management and **Zod** for schema validation.

---

## **Features**

- **Product Management**: Add, update, retrieve, and delete stationery products.
- **Order Management**: Place orders, calculate total prices, and manage order status.
- **Revenue Calculation**: Generate revenue reports based on completed orders.
- **User-Friendly API**: Easily accessible and well-documented RESTful API for interacting with products and orders.

---

## **Table of Contents**

1. [Project Setup & Installation](#project-setup--installation)
2. [API Endpoints](#api-endpoints)
   - [Create a Stationery Product](#create-a-stationery-product)
   - [Get All Products](#get-all-products)
   - [Get a Specific Product](#get-a-specific-product)
   - [Update a Product](#update-a-product)
   - [Delete a Product](#delete-a-product)
   - [Place an Order](#place-an-order)
   - [Calculate Revenue](#calculate-revenue)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [Environment Variables](#environment-variables)
6. [License](#license)
7. [Contributors](#contributors)

---

## **Project Setup & Installation** 🚀

### **1. Clone the Repository**

Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/Stationery-Shop-B4A2V5.git
cd Stationery-Shop-B4A2V5
2. Install Dependencies
Run the following command to install the necessary dependencies:

bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the root directory and configure the environment variables:

bash
Copy code
MONGODB_URI=your-mongodb-uri
PORT=5000
Replace your-mongodb-uri with your actual MongoDB URI.

4. Run the Development Server
Start the development server with:

bash
Copy code
npm run dev
Your application will be accessible at http://localhost:5000.

API Endpoints 📡
Create a Stationery Product 📝
Endpoint: /api/products
Method: POST
Description: Creates a new product in the stationery store.
Get All Products 📋
Endpoint: /api/products
Method: GET
Description: Retrieves a list of all stationery products available in the store.
Get a Specific Product 🔍
Endpoint: /api/products/:productId
Method: GET
Description: Fetches detailed information about a specific product.
Update a Product 🔧
Endpoint: /api/products/:productId
Method: PUT
Description: Updates product details (e.g., price, quantity).
Delete a Product 🗑️
Endpoint: /api/products/:productId
Method: DELETE
Description: Deletes a specific product from the store.
Place an Order 🛍️
Endpoint: /api/orders
Method: POST
Description: Places an order for a product, including the quantity and total price.
Calculate Revenue 💰
Endpoint: /api/orders/revenue
Method: GET
Description: Calculates and returns the total revenue from all completed orders.
Technologies Used 🛠️
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Language: TypeScript
Validation: Zod
Environment Variables: dotenv
Development Tools: Nodemon
Folder Structure 📂
bash
Copy code
/Stationery-Shop-B4A2V5
│
├── /models            # Mongoose Models (Products, Orders)
├── /routes            # API routes for products and orders
├── /controllers       # Controllers handling the logic for the routes
├── /middleware        # Middleware for validation and error handling
├── /utils             # Utility functions for helper tasks
├── /config            # Configuration files (e.g., Database setup)
├── /server.ts         # Main entry point of the application
├── .env               # Environment Variables
└── package.json       # Project dependencies and scripts
Environment Variables 🔑
To run the application, create a .env file in the root directory with the following variables:

MONGODB_URI: The MongoDB connection string.
PORT: The port number for the application (default is 5000).
Example:

env
Copy code
MONGODB_URI=mongodb://localhost:27017/stationery-shop
PORT=5000
