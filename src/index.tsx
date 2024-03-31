import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
      <App />
  
);

