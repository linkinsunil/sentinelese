import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Users from './pages/Users';
import User from './pages/User';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
