// const express = require('express');
// const app = express();
// const path = require('path');


// // Middleware to set the necessary headers
// app.use((req, res, next) => {
//   // Set Cross-Origin-Opener-Policy header
//   res.setHeader('Cross-Origin-Opener-Policy', "same-origin");
//   // Set Cross-Origin-Embedder-Policy header
//   res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
//   next();
// });

// // Serve your React application
// //app.use(express.static('App.js')); // Assuming your React app is built into a 'build' folder
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/games/redox', 'index.html'));
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });