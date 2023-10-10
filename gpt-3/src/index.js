import React from "react";
import App from './App';
import './index.css';
import { createRoot } from "react-dom"; // Import createRoot from react-dom

const root = document.getElementById('root');
const rootElement = createRoot(root); // Create a root for rendering

rootElement.render(<App />); // Render your App component using createRoot
