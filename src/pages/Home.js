import React, { useEffect } from 'react';
import { ArrowRight, Download, Phone, Mail, MapPin } from 'lucide-react';
import SmoothTyping from '../components/SmoothTyping';
import heroBgImage from '../assets/HeroBgImg.png';
import prod1Image from '../assets/prod1.jpg';
import offwhiteImage from '../assets/offwhite.jpg';
import copperImg from '../assets/prod1.jpg'; // Replace with actual copper image if available
import aluminiumImg from '../assets/prod1.jpg'; // Replace with actual aluminium image if available
import metalScrapBg from '../assets/metal-scrap-background.jpg';
import './Home.css';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash === '#products') {
            const section = document.getElementById('products');
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="home">
            {/* Hero Section */}
            <section
                className="hero section section-dark"
                style={{
                    backgroundImage: `url(${heroBgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh', // Full viewport height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '0 5%'
                }}
            >
                <div className="hero-text">
                    <SmoothTyping />
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="products-section section section-gray" style={{
                backgroundImage: `url(${offwhiteImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                color: '#222'
            }}>
                <div className="container">
                    <h2 className="section-title" style={{color: '#111'}}>Our Products</h2>
                    <div className="products-grid">
                        {/* Copper Products Card */}
                        <div className="product-card">
                            <img src={copperImg} alt="Copper Products" className="product-card-img" />
                            <h3 className="product-card-title">Copper Products</h3>
                            <button className="product-btn-animated">View Copper Products</button>
                        </div>
                        {/* Aluminium Products Card */}
                        <div className="product-card">
                            <img src={aluminiumImg} alt="Aluminium Products" className="product-card-img" />
                            <h3 className="product-card-title">Aluminium Products</h3>
                            <button className="product-btn-animated">View Aluminium Products</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
