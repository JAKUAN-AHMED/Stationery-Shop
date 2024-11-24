# 🛒 Stationery Shop B4A2V5  

🚀 **Live Demo**: [Stationery Shop B4A2V5](https://stationery-shop-2.onrender.com/)  

Welcome to **Stationery Shop B4A2V5**, a robust backend application designed to manage products, orders, and revenues for a stationery shop. Built with **TypeScript**, **Express.js**, **MongoDB**, and **Mongoose**, this project implements clean architecture, validation, and advanced error handling to ensure high reliability.  

---

## 📹 **Project Video Review**  
Watch the full walkthrough of this project, showcasing its features and functionality.  
👉 **[Watch Video Review](#)** *(https://drive.google.com/file/d/1vvLbQ63-IzECNGUfULKIPy7uKXD6pvdw/view?usp=drive_link)*  

---

## 📋 **Features**

### ✨ **Product Management**  
- Add, update, view, and delete products.  
- Track inventory with accuracy.  

### 🛍️ **Order Management**  
- Place orders with dynamic total price calculations.  
- Manage order statuses with ease.  

### 📈 **Revenue Reporting**  
- Calculate and view revenue generated from completed orders.  

### ⚡ **Key Highlights**  
- **Validation**: Implements **Zod** for robust input validation.  
- **Error Handling**: Comprehensive middleware for consistent error responses.  
- **Scalable Architecture**: Modular structure for easy scalability and maintainability.  

---

## 🛠️ **Technologies Used**

- **Backend Framework**: Express.js  
- **Programming Language**: TypeScript  
- **Database**: MongoDB with Mongoose  
- **Validation**: Zod  
- **Linting and Formatting**: ESLint and Prettier  
- **Deployment**: Render  

---

## 📂 **Folder Structure**

```plaintext
Stationery-Shop-B4A2V5/
│
├── dist/                # Compiled JavaScript files
├── node_modules/        # Node.js dependencies
├── src/                 # Source code
│   ├── config/          # Database and environment configurations
│   ├── controller/      # Logic for handling requests
│   ├── interfaces/      # TypeScript interfaces for types
│   ├── middlewares/     # Middleware for validation and error handling
│   ├── models/          # Mongoose schemas and models
│   ├── routes/          # Route definitions for the API
│   ├── services/        # Business logic and reusable services
│   ├── utility/         # Helper functions
│   ├── app.ts           # Initializes Express app
│   └── server.ts        # Entry point to start the server
├── .env                 # Environment variables
├── .gitignore           # Files to be ignored by Git
├── .prettierrc          # Prettier configuration for formatting
├── .eslint.config.mjs   # ESLint configuration for linting
├── package-lock.json    # Dependency tree lock file
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
🏁 Getting Started
Follow these steps to set up the project locally:

📂 Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/your-username/Stationery-Shop-B4A2V5.git
cd Stationery-Shop-B4A2V5
📦 Step 2: Install Dependencies
Install all required dependencies:

bash
Copy code
npm install
🔧 Step 3: Configure Environment Variables
Create a .env file in the root directory and add the following variables:

env
Copy code
MONGODB_URI=your-mongodb-connection-string
PORT=5000
Replace your-mongodb-connection-string with your MongoDB URI.

▶️ Step 4: Run the Application
Start the development server:

bash
Copy code
npm run dev
The application will be live at http://localhost:5000.

📡 API Endpoints
📝 Product Endpoints
POST /api/products: Add a new product.
GET /api/products: Retrieve all products.
GET /api/products/:id: Retrieve details of a specific product.
PUT /api/products/:id: Update product details.
DELETE /api/products/:id: Delete a product.
🛍️ Order Endpoints
POST /api/orders: Place an order.
GET /api/orders/revenue: Retrieve revenue details.
🌐 Scripts
The following scripts are available in the package.json:

Command	Description
npm run dev	Starts the development server.
npm run build	Compiles TypeScript to JavaScript.
npm run start	Starts the production server.
npm run lint	Runs ESLint for linting.
npm run format	Formats code using Prettier.
🛠️ Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a feature branch: git checkout -b my-feature.
Commit your changes: git commit -m "Add new feature".
Push to the branch: git push origin my-feature.
Submit a pull request.
