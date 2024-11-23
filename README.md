# 🛒 Stationery Shop B4A2V5

🚀 **Live Demo**: [Stationery Shop B4A2V5](https://stationery-shop-2.onrender.com/)  

Welcome to **Stationery Shop B4A2V5**, a powerful inventory and order management application built using **Express.js**, **TypeScript**, **MongoDB**, and **Mongoose**. This system offers a comprehensive solution for managing stationery products, orders, and revenue calculation with a user-friendly API.  

---

## 📋 **Features**

✨ **Product Management**:  
- Add, update, view, and delete stationery products easily.  
- Track product inventory levels.  

🛍️ **Order Management**:  
- Place customer orders with dynamic total price calculation.  
- Manage and update order statuses.  

📈 **Revenue Calculation**:  
- Generate and retrieve revenue reports from completed orders.  

💡 **Key Highlights**:  
- **Validation**: Uses **Zod** for data validation to ensure API reliability.  
- **Error Handling**: Advanced middleware for error management.  
- **Responsive API Design**: RESTful API ready for integration with frontends or third-party tools.  

---

## 📦 **Table of Contents**

1. [Live Demo](#-live-demo)  
2. [Features](#-features)  
3. [Technologies Used](#-technologies-used)  
4. [Getting Started](#-getting-started)  
5. [API Endpoints](#-api-endpoints)  
6. [Folder Structure](#-folder-structure)  
7. [License](#-license)  
8. [Contributors](#-contributors)  

---

## 🛠️ **Technologies Used**

- **Backend Framework**: Node.js with Express.js  
- **Database**: MongoDB with Mongoose  
- **Programming Language**: TypeScript  
- **Validation**: Zod  
- **Deployment**: Render  
- **Environment Management**: dotenv  

---

## 🏁 **Getting Started**

Follow these steps to set up the project locally and run it on your machine:  

### 📂 **Step 1: Clone the Repository**
```bash
git clone https://github.com/your-username/Stationery-Shop-B4A2V5.git
cd Stationery-Shop-B4A2V5
📦 Step 2: Install Dependencies
Install all required dependencies with:

bash
Copy code
npm install
🔧 Step 3: Configure Environment Variables
Create a .env file in the project root and add the following variables:

env
Copy code
MONGODB_URI=your-mongodb-connection-string
PORT=5000
Replace your-mongodb-connection-string with your MongoDB URI.

▶️ Step 4: Run the Application
Run the development server with:

bash
Copy code
npm run dev
Your app will be live at http://localhost:5000.

📡 API Endpoints
📝 Product Endpoints
POST /api/products: Add a new product.
GET /api/products: Retrieve all products.
GET /api/products/:productId: Retrieve details of a specific product.
PUT /api/products/:productId: Update product details.
DELETE /api/products/:productId: Delete a product.
🛍️ Order Endpoints
POST /api/orders: Place an order.
GET /api/orders/revenue: Retrieve revenue details from completed orders.
📂 Folder Structure
plaintext
Copy code
Stationery-Shop-B4A2V5
│
├── /models            # Schema definitions (e.g., Product, Order)
├── /routes            # API endpoints (e.g., products, orders)
├── /controllers       # Logic for handling requests
├── /middleware        # Error handling and validation middleware
├── /config            # Database configuration
├── /utils             # Helper functions
├── server.ts          # Application entry point
├── package.json       # Project dependencies and scripts
├── .env               # Environment variables
└── README.md          # Project documentation
