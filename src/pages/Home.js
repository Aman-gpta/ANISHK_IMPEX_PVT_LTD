import React from 'react';
import { ArrowRight, Download, Phone, Mail, MapPin } from 'lucide-react';
import ReviewSection from '../components/ReviewSection';
import SmoothTyping from '../components/SmoothTyping';
import heroBgImage from '../assets/HeroBgImg.png';
import prod1Image from '../assets/prod1.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section
                className="hero section section-dark"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url(${heroBgImage})`,
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
            <section id="products" className="products-section section section-gray">
                <div className="container">
                    <h2 className="section-title">Our Products</h2>
                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src={prod1Image} alt="High-Grade Copper Scrap" className="product-img" />
                            </div>
                            <div className="product-content">
                                <h3>High-Grade Copper Scrap</h3>
                                <p>Premium quality copper scrap material sourced from industrial operations. Ideal for recycling and manufacturing applications with 99% purity.</p>
                                <a href="#" className="product-link">View Details</a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src={prod1Image} alt="Aluminum Alloy Scrap" className="product-img" />
                            </div>
                            <div className="product-content">
                                <h3>Aluminum Alloy Scrap</h3>
                                <p>Clean aluminum alloy scrap from various industrial sources. Perfect for foundries and manufacturing facilities with consistent quality.</p>
                                <a href="#" className="product-link">View Details</a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src={prod1Image} alt="Stainless Steel Scrap" className="product-img" />
                            </div>
                            <div className="product-content">
                                <h3>Stainless Steel Scrap</h3>
                                <p>High-quality stainless steel scrap with documented composition. Ideal for specialty manufacturing and recycling operations.</p>
                                <a href="#" className="product-link">View Details</a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src={prod1Image} alt="Brass Scrap Materials" className="product-img" />
                            </div>
                            <div className="product-content">
                                <h3>Brass Scrap Materials</h3>
                                <p>Assorted brass scrap from various industrial applications. Sorted by grade and quality for specific manufacturing needs.</p>
                                <a href="#" className="product-link">View Details</a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src={prod1Image} alt="Lead Scrap Products" className="product-img" />
                            </div>
                            <div className="product-content">
                                <h3>Lead Scrap Products</h3>
                                <p>High-density lead scrap material with minimal contaminants. Suitable for battery manufacturing and other industrial applications.</p>
                                <a href="#" className="product-link">View Details</a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src={prod1Image} alt="Zinc Alloy Materials" className="product-img" />
                            </div>
                            <div className="product-content">
                                <h3>Zinc Alloy Materials</h3>
                                <p>Premium zinc alloy scrap with certified composition. Perfect for die-casting and manufacturing operations requiring high-quality materials.</p>
                                <a href="#" className="product-link">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Section */}
            <ReviewSection />
        </div>
    );
};

export default Home;
