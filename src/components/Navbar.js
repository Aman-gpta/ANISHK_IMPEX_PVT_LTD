import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../Copy of Copy of Global Metal Traders Logo (11).png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const openWhatsApp = () => {
        window.open(`https://wa.me/+919891533533`, '_blank');
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { isWhatsApp: true, label: 'Contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                        <img src={logo} alt="Anishk Impex" className="navbar-logo-img" />
                        <span className="navbar-logo-text">ANISHK IMPEX PVT. LTD.</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-menu">
                    {navItems.map((item, index) => (
                        item.isWhatsApp ? (
                            <button
                                key={index}
                                className="navbar-item whatsapp-nav-button"
                                onClick={openWhatsApp}
                            >
                                {item.label}
                            </button>
                        ) : (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                        <img src={logo} alt="Anishk Impex" className="mobile-menu-logo-img" />
                        <span className="mobile-menu-logo-text">ANISHK IMPEX PVT. LTD.</span>
                    </Link>
                </div>
                {navItems.map((item, index) => (
                    item.isWhatsApp ? (
                        <button
                            key={index}
                            className="navbar-mobile-item whatsapp-nav-button"
                            onClick={() => {
                                openWhatsApp();
                                setIsOpen(false);
                            }}
                        >
                            {item.label}
                        </button>
                    ) : (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`navbar-mobile-item ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    )
                ))}
            </div>

            {/* Overlay to close menu when clicking outside */}
            {isOpen && (
                <div
                    className="navbar-overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
};

export default Navbar;
