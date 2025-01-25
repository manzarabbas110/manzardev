import React, { useState } from 'react';
import './Header.css';
import { FaLocationArrow, FaRegMoon, FaRegSun, FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
    const [darkTheme, setDarkTheme] = useState("light");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleThemeChange = () => {
        const theme = darkTheme === "light" ? "dark" : "light";
        setDarkTheme(theme);
        document.documentElement.setAttribute("data-theme", theme);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false); // Close the mobile menu after clicking a link
    };

    const headerListItems = [
        { name: "Home", id: "home" },
        { name: "About me", id: "aboutme" },
        { name: "Services", id: "services" },
        { name: "My Work", id: "mywork" },
        { name: "Contact Me", id: "contactme" },
    ];

    return (
        <header className='header'>
            <div className='header-logo'>
                <h1>Manzar</h1>
                <span className='name-dot'></span>
            </div>
                <div className='hamburger-menu' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
                <ul className={`header-list-items ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                {headerListItems.map((item, index) => (
                    <li key={index}>
                        <button className='li-button' onClick={() => scrollToSection(item.id)}>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className='header-buttons'>
                <button onClick={handleThemeChange}>
                    {darkTheme === "light" ? <FaRegMoon size={28} /> : <FaRegSun size={28} />}
                </button>
                <button className='contact-button'>
                    Contact
                    <FaLocationArrow />
                </button>
            </div>
        </header>
    );
};

export default Header;