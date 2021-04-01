import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import './Header.css'
const AppHeader = styled.div`
    background: rgba(112, 128, 144, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
    z-index: 1;
    width: 100%;
    min-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
`;
const NavLinks = styled.ul`
    display: flex;
    list-style: none;
`;

const NavLinkItem = styled(NavLink)`
    text-decoration: none;
    margin: 5px 20px 5px 0;
    padding: 5px 30px;
    color: black;
    font-size: 18px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 4px;
    &:hover,
    &.active {
        border-radius: 4px;
        background-color: #222;
        color: aliceblue;
        transition: 0.2s all;
    }
    &:active {
        transform: scale(0.96);
    }
`;
function Header() {
    return (
        <AppHeader>
            <NavLinks>
                <NavLinkItem to="/home" className="navbar-link-item">
                    Home
                </NavLinkItem>
                <NavLinkItem to="/about" className="navbar-link-item">
                    About
                </NavLinkItem>
                <NavLinkItem to="/contact" className="navbar-link-item">
                    Contact
                </NavLinkItem>
            </NavLinks>
        </AppHeader>
    );
}

export default Header;
