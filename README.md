# Zerodha Clone

A full-stack Zerodha clone featuring a landing page and a trading dashboard. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and includes features like stock holdings, positions, and order management.

## Project Structure

The project is divided into three main components:

- **`backend/`**: Node.js and Express server handling the API and database connections.
- **`frontend/`**: React application for the main landing page.
- **`dashboard/`**: React application for the trading dashboard interface.

## Tech Stack

### Backend
- **Node.js & Express**: Web server framework.
- **MongoDB & Mongoose**: Database and ODM for storing holdings, positions, and orders.
- **Passport.js**: Authentication middleware.
- **Dotenv**: Environment variable management.
- **Cors**: Cross-Origin Resource Sharing.

### Frontend
- **React (v19)**: Main UI library.
- **React Router**: Client-side routing.
- **Vanilla CSS**: Custom styling.

### Dashboard
- **React (v19)**: Main UI library.
- **Material UI (MUI)**: Component library for a premium look and feel.
- **Chart.js & React-Chartjs-2**: Visualizing portfolio data with charts.
- **React Router**: Client-side routing.

## Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/kartikbhadane15/zerodha-clone.git
cd zerodha-clone
```

### 2. Setup Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory and add your MongoDB URL:
   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=3002
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### 3. Setup Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```

### 4. Setup Dashboard
1. Navigate to the dashboard directory:
   ```bash
   cd ../dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dashboard application:
   ```bash
   npm start
   ```

## API Endpoints (Backend)

- `GET /allHoldings`: Fetch all stock holdings.
- `GET /allPositions`: Fetch all current positions.
- `POST /newOrder`: Place a new order.

## License
This project is licensed under the ISC License.

## Author
**Kartik Bhadane**
