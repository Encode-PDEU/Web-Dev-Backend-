# Inventory Management System

This is a simple Inventory Management System implemented using Node.js, Express, and MongoDB.

## Getting Started

To get started with the project, follow these instructions:

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or accessible via connection string

### Installing Dependencies

1. Clone this repository to your local machine:

git clone <repository-url>


2. Navigate to the project directory:

cd inventory-management-system


3. Install dependencies using npm:

npm install


### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

PORT=3000
MONGO_URI=<your-mongodb-connection-string>


### Running the Server

To start the server, run the following command:

npm run dev


This will start the server on the specified port (default is 3000) and connect to the MongoDB database using the provided connection string.

## API Endpoints

- GET `/api/products`: Get all products
- GET `/api/product/:id`: Get a product by ID
- POST `/api/product`: Add a new product
- PATCH `/api/product/:id`: Update a product by ID
- DELETE `/api/product/:id`: Delete a product by ID

Replace `:id` with the actual ID of the product.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request for any improvements or additional features.

## License

This project is licensed under the [MIT License](LICENSE).
