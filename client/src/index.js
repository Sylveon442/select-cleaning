import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './main.less'

const router = createBrowserRouter([
  {path: "/", element: <Login />},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

