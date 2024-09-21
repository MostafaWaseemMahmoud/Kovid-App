import React from 'react';
import './header.css'
const Header = () => {
    const GO_Transmission = ()=>{
        window.scrollTo({
            behavior: 'smooth',
            top: 600,
        })
    }
    const GO_Symptoms = ()=>{
        window.scrollTo({
            behavior: 'smooth',
            top: 1200,
        })
    }
    const GO_Prevention = ()=>{
        window.scrollTo({
            behavior: 'smooth',
            top: 3000,
        })
    }
    return (
    <header>
        <div className="logo">
            <img src="https://kovid-app.netlify.app/static/media/logo.e0ea8ef0.svg"/>
            COVID - 19
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li onClick={GO_Transmission}>Transmission</li>
                <li onClick={GO_Symptoms}>Symptoms</li>
                <li onClick={GO_Prevention}>Prevention</li>
                <li>
                    <button>Made By Mostafa Waseem Mahmoud</button>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;