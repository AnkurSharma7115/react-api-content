import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <div className="App-header">            
                <ul className="navbar-link">
                    <Link to='/' className="navbar-link-item">Home</Link>
                    <Link to='/about' className="navbar-link-item">About</Link>
                    <Link to='/contact' className="navbar-link-item">Contact</Link>

                </ul>
        </div>
    );
}

export default Header