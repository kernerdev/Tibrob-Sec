import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import React from 'react';
import Footer from './components/Footer';

export default function App() {
  return (
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<Footer />} />
      </Routes>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <BrowserRouter basename="/Tibrob-Sec">
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
