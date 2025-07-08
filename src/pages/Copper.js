import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Copper.css';
import offwhiteImage from '../assets/offwhite.jpg';
import copperImage from '../assets/prod1.jpg'; // Placeholder, replace with actual image

const Copper = () => {
    const copperProducts = [
        {
            title: "Copper Grade A",
            description: "High-purity copper cathodes, ideal for electrical applications and premium alloys.",
            image: copperImage
        },
        {
            title: "Copper Scrap Birch/Cliff",
            description: "Clean copper tubing and solids, suitable for recycling into new copper products.",
            image: copperImage
        }
    ];

    return (
        <div className="copper-page" style={{ backgroundImage: `url(${offwhiteImage})` }}>
            <div className="container product-page-container">
                <h1 className="page-title">Copper Products</h1>
                <div className="product-grid">
                    {copperProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            description={product.description}
                            image={product.image}
                            linkTo="#"
                            linkText="Details"
                        />
                    ))}
                </div>
                <div className="page-navigation-container">
                    <Link to="/aluminium" className="page-navigation-btn">
                        View Aluminium Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Copper; 