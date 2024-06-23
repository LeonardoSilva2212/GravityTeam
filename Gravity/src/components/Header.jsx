import React from "react";
import logoSite from "../assets/images/logo.svg"
import '../assets/css/header.css'

function Header() {
    return(
        <header>
            <div className="logo">
                <img src={logoSite} alt="" />
            </div>

            <div className="menu-nav">
                <lu>
                    <li><a href="">About us</a></li>
                    <li><a href="">Our Services</a></li>
                    <li><a href="">Work With Us</a></li>
                    <li><a href="">Blog</a></li>
                </lu>
            </div>

            <div className="buttonHome">
                <button><a href="">Get In Touch</a></button>
            </div>
        </header>
    )
}

export default Header;