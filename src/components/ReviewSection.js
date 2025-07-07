import React from 'react';
import { Star, Quote } from 'lucide-react';
import './ReviewSection.css';

const ReviewSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Anil Gupta",
            position: "",
            rating: 5,
            text: "Excellent quality copper scrap and prompt delivery! Anishk Impex has been our trusted supplier for over 2 years. Their metal grades are consistently top-notch and pricing is competitive.",
            avatar: "AG"
        },
        {
            id: 2,
            name: "Mukesh Khandelwal",
            position: "",
            rating: 5,
            text: "Outstanding service and reliability! They supplied us with premium aluminum alloy scrap for our foundry operations. The quality exceeded our expectations and delivery was right on time.",
            avatar: "MK"
        },
        {
            id: 3,
            name: "Kanika Sharma",
            position: "",
            rating: 5,
            text: "Professional team with exceptional metal trading expertise! Their brass and steel scrap materials are of superior quality. Anishk Impex has become our preferred metal supplier.",
            avatar: "KS"
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                size={16}
                className={`star ${index < rating ? 'filled' : ''}`}
                fill={index < rating ? 'currentColor' : 'none'}
            />
        ));
    };

    return (
        <section className="reviews section section-gray">
            <div className="container">
                <div className="reviews-header">
                    <h2 className="section-title">Client Testimonials</h2>
                    <p className="reviews-subtitle">
                        What our clients say about our metal fabrication services
                    </p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <div className="review-rating">
                                    {renderStars(review.rating)}
                                </div>
                                <div className="reviewer-info">
                                    <div className="reviewer-details">
                                        <h4 className="reviewer-name">{review.name}</h4>
                                        <p className="reviewer-position">{review.position}</p>
                                    </div>
                                    <div className="reviewer-avatar">
                                        {review.avatar}
                                    </div>
                                </div>
                            </div>

                            <div className="review-content">
                                <Quote className="quote-icon" size={24} />
                                <p className="review-text">{review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
