import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/login' element={<LoginScreen />} exact='true' />
          <Route path='/' element={<CalendarScreen />} exact='true' />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
