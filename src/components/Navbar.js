import React from 'react';
import brandLogo from '../images/foodine.png';

const Navbar = () => {
    return (
        <nav className="sticky mx-auto flex items-center justify-between shadow px-10">
            <div>
                <img src={brandLogo} className="w-36" alt="" />
            </div>
            <div className="flex">
                <ul className="flex m-auto">
                    <li className="nav-items"><a href="#home">Home</a></li>
                    <li className="nav-items"><a href="#about">About</a></li>
                    <li className="nav-items"><a href="#menu">menu</a></li>
                    <li className="nav-items"><a href="#events">events</a></li>
                    <li className="nav-items"><a href="#contact">contact</a></li>
                    <li className="nav-items"><a href="#reservations">reservations</a></li>
                </ul>
                <div className="flex ml-10">
                    <a href="#" className="text-dark ml-8 hover:text-primary transition duration-375ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </a>
                    <a href="#" className="text-dark ml-10 hover:text-primary transition duration-75 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;