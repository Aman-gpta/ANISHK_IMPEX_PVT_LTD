import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, description, linkTo, linkText }) => {
    return (
        <div className="our-product-card">
            <div className="our-product-card-img-container">
                <img src={image} alt={title} className="our-product-card-img" />
            </div>
            <div className="our-product-card-content">
                <h3 className="our-product-card-title">{title}</h3>
                {description && <p className="our-product-card-description">{description}</p>}
                <a href={linkTo} className="our-product-details-btn">{linkText}</a>
            </div>
        </div>
    );
};

export default ProductCard; 