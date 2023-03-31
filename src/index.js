import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import HomePage from './Pages/Client/HomePage';
import About from './Pages/Client/About';
import NotFound from './Pages/404';
import Orders from './Pages/Client/Orders';
import Profile from './Pages/Client/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>

      <Route path="/" element={<App />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate replace to='/' />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>

  </BrowserRouter>
);

