import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import MovieDetailsPage from './pages/MovieDetailsPage.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // 1. Import router tools

// 2. Create the router configuration
const router = createBrowserRouter([
  {
    path: '/', // The URL path
    element: <App />, // The component to render for that path
  },
  {
    path: '/movie/:movieId', // Add the new dynamic route
    element: <MovieDetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Tell your app to use the router */}
    <RouterProvider router={router} /> 
  </React.StrictMode>,
);