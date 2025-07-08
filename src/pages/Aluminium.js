import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Aluminium.css';
import offwhiteImage from '../assets/offwhite.jpg';
import aluminiumImage from '../assets/prod1.jpg'; // Placeholder, replace with actual image

const Aluminium = () => {
    const aluminiumProducts = [
        {
            title: "Aluminium Ingots",
            description: "High-purity aluminium ingots, perfect for casting and creating a wide range of products.",
            image: aluminiumImage
        },
        {
            title: "Aluminium Tense Scrap",
            description: "Clean, mixed old alloy sheet aluminium scrap, ideal for foundries and die-casters.",
            image: aluminiumImage
        },
        {
            title: "Aluminium Extrusions",
            description: "6063 extrusions and other profiles, suitable for windows, doors, and structural applications.",
            image: aluminiumImage
        },
        {
            title: "UBC Aluminium Cans",
            description: "Used beverage cans, baled and ready for recycling into new aluminium products.",
            image: aluminiumImage
        },
        {
            title: "Aluminium Wheels",
            description: "Scrap aluminium alloy wheels from cars and trucks, a valuable source for recycling.",
            image: aluminiumImage
        }
    ];

    return (
        <div className="aluminium-page" style={{ backgroundImage: `url(${offwhiteImage})` }}>
            <div className="container product-page-container">
                <h1 className="page-title">Aluminium Products</h1>
                <div className="product-grid">
                    {aluminiumProducts.map((product, index) => (
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
                    <Link to="/copper" className="page-navigation-btn">
                        View Copper Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Aluminium; 