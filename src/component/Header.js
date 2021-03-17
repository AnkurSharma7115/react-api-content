import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="App-header">            
                <ul className="navbar-link">
                    <li className="navbar-link-item">Home</li>
                    <li className="navbar-link-item">About</li>
                    <li className="navbar-link-item">Blog</li>
                </ul>
        </div>
    );
}

export default Header