import React from 'react'
import './Navbar.css';
import myimage from './assets/berry.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
               <span>Skhul </span> 
                <img className='mylogo' src={myimage} alt="MyLogo" />
            </div>
            <ul className="menu">
                <li>Courses</li>
                <li>Learn</li>
                <li>Pricing</li>
                <li>Login</li>
            </ul>
            <button>Join Now</button>
        </div>
    )
}

export default Navbar
