import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
