import React, { useState } from "react";
import logo from "../img/logo.png";

function Home(){
    const [nav,Setnav] = useState(false)

    const changebg = () => {
        if(window.scrollY >= 120){
            Setnav(true)
        }else{
            Setnav(false)
        }
    }

    window.addEventListener("scroll",changebg);
    return (
        <header>
            <nav className={nav ? "active" : nav}>
                <div className="logo"><img src={logo} /></div>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="#main">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="div-text">
                <h6>Welcome To My World</h6>
                <h1>HI,I'm Arman</h1>
                <h1>Front-End Developer</h1>
                <h1>based in Yerevan.</h1>
            </div>
        </header>
    )
}
export default Home;