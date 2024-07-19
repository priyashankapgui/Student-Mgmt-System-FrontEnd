
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import All from '../src/pages/All/All';
import Crud from './pages/Crud/Crud';

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<All />} />
    <Route path="/crud" element={<Crud />} />
  </Routes>
);

export default RoutesConfig;
