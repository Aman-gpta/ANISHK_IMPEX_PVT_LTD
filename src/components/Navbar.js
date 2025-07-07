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

    const handleNavClick = () => {
        // Close mobile menu immediately
        setIsOpen(false);
        
        // Force scroll to top with multiple methods
        const scrollToTop = () => {
            // Method 1: Window scroll with instant behavior
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
            
            // Method 2: Direct assignment
            window.scrollTo(0, 0);
            
            // Method 3: Document element
            if (document.documentElement) {
                document.documentElement.scrollTop = 0;
                document.documentElement.scrollLeft = 0;
            }
            
            // Method 4: Body element
            if (document.body) {
                document.body.scrollTop = 0;
                document.body.scrollLeft = 0;
            }
            
            // Method 5: Use global function if available
            if (window.forceScrollToTop) {
                window.forceScrollToTop();
            }
            
            // Method 6: Dispatch custom event
            window.dispatchEvent(new Event('forceScrollReset'));
        };
        
        // Execute immediately
        scrollToTop();
        
        // Execute after micro-task
        Promise.resolve().then(scrollToTop);
        
        // Execute with timeout to ensure DOM updates
        setTimeout(scrollToTop, 0);
        setTimeout(scrollToTop, 10);
        setTimeout(scrollToTop, 50);
        setTimeout(scrollToTop, 100);
    };

    const handleProductsClick = (e) => {
        e.preventDefault();
        if (window.location.pathname !== '/') {
            window.location.assign('/#products');
        } else {
            const section = document.getElementById('products');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            window.history.replaceState(null, '', '/#products');
        }
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/#products', label: 'Products', isProducts: true },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-brand" style={{marginTop: '24px'}}>
                    <Link to="/" className="navbar-logo" onClick={handleNavClick}>
                        <img src={logo} alt="Anishk Impex" className="navbar-logo-img" />
                    </Link>
                    <span className="navbar-logo-text">ANISHK IMPEX PVT. LTD.</span>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-menu">
                    {navItems.map((item, index) => (
                        item.isProducts ? (
                            <a
                                key={item.path}
                                href="/#products"
                                className={`navbar-item${location.hash === '#products' ? ' active' : ''}`}
                                onClick={handleProductsClick}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={handleNavClick}
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
                    <Link to="/" className="navbar-logo" onClick={handleNavClick}>
                        <img src={logo} alt="Anishk Impex" className="mobile-menu-logo-img" />
                    </Link>
                    <span className="mobile-menu-logo-text">ANISHK IMPEX PVT. LTD.</span>
                </div>
                {navItems.map((item, index) => (
                    item.isProducts ? (
                        <a
                            key={item.path}
                            href="/#products"
                            className={`navbar-mobile-item${location.hash === '#products' ? ' active' : ''}`}
                            onClick={handleProductsClick}
                        >
                            {item.label}
                        </a>
                    ) : (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`navbar-mobile-item ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={handleNavClick}
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
