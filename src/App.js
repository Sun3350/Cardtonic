import React, { useState} from 'react'
import Home from "./Components/Home"
import './App.css';
import Contact from './Components/Contact'
import Signin from './Components/Signin'
import Header from "./Components/Header"
import Register from "./Components/Register"
import Apply from "./Components/Apply"
import Sidebar from "./Components/Sidebar"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;

