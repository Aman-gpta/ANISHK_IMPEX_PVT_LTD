import React from 'react';
import { Mail, Heart, Phone, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <Mail size={20} />,
            name: "Email",
            url: "mailto:anishkimpex@gmail.com"
        },
        {
            icon: <Phone size={20} />,
            name: "Call",
            url: "tel:+919887973000"
        },
        {
            icon: <Linkedin size={20} />,
            name: "LinkedIn",
            url: "https://linkedin.com/your-profile"
        },
        {
            icon: <Twitter size={20} />,
            name: "X",
            url: "https://x.com/your-profile"
        },
        {
            icon: <Instagram size={20} />,
            name: "Instagram",
            url: "https://instagram.com/your-profile"
        },
        {
            icon: <Facebook size={20} />,
            name: "Facebook",
            url: "https://facebook.com/your-profile"
        }
    ];

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const services = [
        "Metal Scrap Trading",
        "Recycling Solutions",
        "Industrial Materials",
        "Metal Processing"
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Footer Brand */}
                    <div className="footer-section">
                        <div className="footer-brand">
                            <h3>ANISHK IMPEX PVT. LTD.</h3>
                            <p>
                                Global metals, local trust. Your reliable partner in high-quality metal products and scrap materials.
                            </p>
                        </div>
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.path}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section contact-section">
                        <h4>Get In Touch</h4>
                        <div className="footer-contact">
                            <p>
                                <Mail size={16} />
                                <span>anishkimpex@gmail.com</span>
                            </p>
                            <p>
                                <Phone size={16} />
                                <span>+91-9887973000</span>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>Business Hours: Mon-Sat, 9am to 6pm</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>
                            © {currentYear} ANISHK IMPEX PVT. LTD. All rights reserved.
                        </p>
                    </div>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
