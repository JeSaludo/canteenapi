// server.js
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;  // Default to 5000 if not set
const cors = require('cors');

app.use(cors());
// Middleware

app.use(express.json()); // For parsing application/json

  // Enable CORS
// Example route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

