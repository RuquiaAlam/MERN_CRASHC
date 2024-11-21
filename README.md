React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh

The project is an E-commerce website built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a platform for users to view and purchase various products. The server-side (Node.js with Express) manages the API for product data stored in a MongoDB database. The client-side (React) handles the user interface and interacts with the server to fetch and display product information.
//
add scripts in package.json file
"scripts": {
"dev": "NODE_ENV=development nodemon backend/server.js",
"build": "npm install && npm install --prefix frontend && npm run build --prefix frontend",
"test": "echo \"Error: no test specified\" && exit 1",
"start": "NODE_ENV=production node backend/server.js"
},
