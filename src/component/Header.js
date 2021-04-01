import React from "react";
import { NavLink } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
// import './Header.css'

const theme = {
    background: "rgba(112, 128, 144, 1)",
    mainButton: "black",
    hoverButton: {
        hoverColor: "white",
        hoverBackground: "black",
    },
};
const AppHeader = styled.div`
    background: ${(props) => props.theme.background};
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
    color: ${(props) => props.theme.mainButton};
    font-size: 18px;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.mainButton};
    border-radius: 4px;
    &:hover,
    &.active {
        border-radius: 4px;
        background: ${(props) => props.theme.hoverButton.hoverBackground};
        color: ${(props) => props.theme.hoverButton.hoverColor};
        border: 1px solid ${(props) => props.theme.hoverButton.hoverColor};
        transition: 0.2s all;
    }
    &:active {
        transform: scale(0.96);
    }
`;
function Header() {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default Header;
