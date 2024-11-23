# Stationery Shop B4A2V5 📚✏️

### **Objective:**
Develop an Express application with TypeScript, integrating MongoDB with Mongoose to manage a **Stationery Shop**. Ensure data integrity using Mongoose schema validation.

---

## 🚀 **Project Setup & Installation**

Follow the steps below to set up and run this project locally:

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/Stationery-Shop-B4A2V5.git
cd Stationery-Shop-B4A2V5
2. Install Dependencies
bash
Copy code
npm install
3. Environment Variables
Create a .env file in the root directory of the project and add the following variables:

env
Copy code
MONGODB_URI=mongodb://your-mongodb-uri
PORT=5000
Note: Replace your-mongodb-uri with your actual MongoDB connection URI.

4. Run the Development Server
bash
Copy code
npm run dev
Your application should now be running at http://localhost:5000.

💡 Project Structure
bash
Copy code
/Stationery-Shop-B4A2V5
│
├── /models            # Mongoose Models (Products, Orders)
├── /routes            # API routes
├── /controllers       # Route handlers
├── /middleware        # Validation and error handling
├── /utils             # Utility functions
├── /config            # Database and environment setup
├── /server.ts         # Main entry point
├── .env               # Environment Variables
└── package.json       # Project Dependencies and Scripts
🛠️ API Endpoints
1. Create a Stationery Product 📝
Endpoint: /api/products
Method: POST
Request Body:
json
Copy code
{
  "name": "Notebook",
  "brand": "Moleskine",
  "price": 15,
  "category": "Office Supplies",
  "description": "A high-quality notebook for professionals.",
  "quantity": 200,
  "inStock": true
}
Response:
json
Copy code
{
  "message": "Product created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Notebook",
    "brand": "Moleskine",
    "price": 15,
    "category": "Office Supplies",
    "description": "A high-quality notebook for professionals.",
    "quantity": 200,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
2. Get All Stationery Products 📋
Endpoint: /api/products

Method: GET

Query: Search products by category (?searchTerm=category).

Response:

json
Copy code
{
  "message": "Products retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "name": "Notebook",
      "brand": "Moleskine",
      "price": 15,
      "category": "Office Supplies",
      "description": "A high-quality notebook for professionals.",
      "quantity": 200,
      "inStock": true
    }
  ]
}
3. Get a Specific Stationery Product 🔍
Endpoint: /api/products/:productId
Method: GET
Response:
json
Copy code
{
  "message": "Product retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Notebook",
    "brand": "Moleskine",
    "price": 15,
    "category": "Office Supplies",
    "description": "A high-quality notebook for professionals.",
    "quantity": 200,
    "inStock": true
  }
}
4. Update a Stationery Product 🔧
Endpoint: /api/products/:productId
Method: PUT
Request Body:
json
Copy code
{
  "price": 18,
  "quantity": 180
}
Response:
json
Copy code
{
  "message": "Product updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Notebook",
    "brand": "Moleskine",
    "price": 18,
    "category": "Office Supplies",
    "description": "A high-quality notebook for professionals.",
    "quantity": 180,
    "inStock": true
  }
}
5. Delete a Stationery Product 🗑️
Endpoint: /api/products/:productId
Method: DELETE
Response:
json
Copy code
{
  "message": "Product deleted successfully",
  "status": true,
  "data": {}
}
6. Order a Stationery Product 🛍️
Endpoint: /api/orders
Method: POST
Request Body:
json
Copy code
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 36
}
Response:
json
Copy code
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 36
  }
}
7. Calculate Revenue from Orders 💰
Endpoint: /api/orders/revenue
Method: GET
Response:
json
Copy code
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 720
  }
}
📂 Folder Structure
bash
Copy code
/Stationery-Shop-B4A2V5
│
├── /models            # Mongoose Models (Products, Orders)
├── /routes            # API routes
├── /controllers       # Route handlers
├── /middleware        # Validation and error handling
├── /utils             # Utility functions
├── /config            # Database and environment setup
├── /server.ts         # Main entry point
├── .env               # Environment Variables
└── package.json       # Project Dependencies and Scripts
🛠️ Technologies Used:
Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Language: TypeScript
Validation: Zod
Others: dotenv, Nodemon for development
📝 Error Handling
This project returns detailed error responses for various scenarios such as validation errors, product not found, or insufficient stock. Each error includes a message, error, and stack for debugging.

Example Error Response:
json
Copy code
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "price": {
        "message": "Price must be a positive number"
      }
    }
  },
  "stack": "Error: Something went wrong\n    at app.js:23:13"
}
📹 Video Explanation
A video explanation of the key features of this API and the logic behind its design can be found here: Link to Video
