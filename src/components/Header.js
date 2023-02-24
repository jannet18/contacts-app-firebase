import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const [activeTab, setActiveTab] = useState("Home")
  return (
    <div className='header'>
        <p className='logo'>Contact App</p>
        <div className='header-right'>
            <Link to='/'>
             <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>Home</p>   
            </Link>
            <Link to='/add'>
             <p className={`${activeTab === "Add Contact" ? "active" : ""}`} onClick={() => setActiveTab("Add Contact")}>Add Contact</p>   
            </Link>
            <Link to='/about'>
             <p className={`${activeTab === "About" ? "active" : ""}`} onClick={() => setActiveTab("About")}>About</p>   
            </Link>
        </div>

    </div>
  )
}

export default Header