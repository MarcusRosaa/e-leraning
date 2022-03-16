import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import Admin from './Pages/Admin';

function App() {
  return (
    <>
      <Router>
        <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />

        <Route path='*' element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
