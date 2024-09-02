import React from 'react';
import  { createRoot }  from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { routes } from './src/routes';
import App from './src/App';
import './src/styles/index.scss';
import './src/styles/main.css';

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>
    },
    ...routes
])

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router={router} />);