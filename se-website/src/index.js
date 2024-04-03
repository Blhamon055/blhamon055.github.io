import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import express from "express"

// const app = express();

// app.use((req, res, next) => {
//   // Set Cross-Origin-Opener-Policy header
//   res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
//   // Set Cross-Origin-Embedder-Policy header
//   res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
//   next();
// });

// // Serve your React application
// app.use(express.static('build')); // Assuming your React app is built into a 'build' folder
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
