import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import About from './pages/About';
import View from './pages/View';
import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
      <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/add' element={<AddEdit/>}></Route>
      <Route path='/update:id' element={<AddEdit/>}></Route>
      <Route path='/view:id' element={<View/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>  
    </Router>
    
    </>
  );
}

export default App;
