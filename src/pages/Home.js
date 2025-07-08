import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmoothTyping from '../components/SmoothTyping';
import ProductCard from '../components/ProductCard'; // Import the new card
import heroBgImage from '../assets/HeroBgImg.png';
import offwhiteImage from '../assets/offwhite.jpg';
import copperImg from '../assets/prod1.jpg';
import aluminiumImg from '../assets/prod1.jpg';
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
                        <ProductCard
                            image={copperImg}
                            title="Copper Products"
                            linkTo="/copper"
                            linkText="View Copper Products"
                        />
                        <ProductCard
                            image={aluminiumImg}
                            title="Aluminium Products"
                            linkTo="/aluminium"
                            linkText="View Aluminium Products"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
