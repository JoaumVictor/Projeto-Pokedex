import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Pokemon from './pages/Pokemon/Pokemon';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Routes>
  );
}
