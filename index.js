import React from 'react';
import  { createRoot }  from 'react-dom/client';
import App from './src/App';
import './src/styles/index.scss'
import './src/styles/main.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);