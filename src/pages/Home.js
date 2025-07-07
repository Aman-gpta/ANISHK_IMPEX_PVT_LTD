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
                    <div className="products-grid" style={{display: 'flex', gap: '3rem', justifyContent: 'center'}}>
                        {/* Copper Products Card */}
                        <div style={{background: 'linear-gradient(135deg, #444 60%, #666 100%)', color: '#fff', borderRadius: '20px', boxShadow: '0 6px 24px rgba(0,0,0,0.12)', width: 540, height: 540, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '3px solid #111'}}>
                            <img src={copperImg} alt="Copper Products" style={{width: 320, height: 320, objectFit: 'cover', borderRadius: 12, marginBottom: 32, border: '2px solid #111'}} />
                            <h3 style={{color: '#fff', marginBottom: 32, fontSize: '2rem'}}>Copper Products</h3>
                            <button className="product-btn-animated" style={{padding: '18px 40px', borderRadius: 10, background: '#b47559', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 600, boxShadow: '0 4px 16px rgba(0,0,0,0.12)'}}>View Copper Products</button>
                        </div>
                        {/* Aluminium Products Card */}
                        <div style={{background: 'linear-gradient(135deg, #444 60%, #666 100%)', color: '#fff', borderRadius: '20px', boxShadow: '0 6px 24px rgba(0,0,0,0.12)', width: 540, height: 540, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '3px solid #111'}}>
                            <img src={aluminiumImg} alt="Aluminium Products" style={{width: 320, height: 320, objectFit: 'cover', borderRadius: 12, marginBottom: 32, border: '2px solid #111'}} />
                            <h3 style={{color: '#fff', marginBottom: 32, fontSize: '2rem'}}>Aluminium Products</h3>
                            <button className="product-btn-animated" style={{padding: '18px 40px', borderRadius: 10, background: '#b47559', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 600, boxShadow: '0 4px 16px rgba(0,0,0,0.12)'}}>View Aluminium Products</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
