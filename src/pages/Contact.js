import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });

            // Clear success message after 3 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: "Email",
            info: "info@steelworks.com",
            link: "mailto:info@steelworks.com"
        },
        {
            icon: <Phone size={24} />,
            title: "Phone",
            info: "+91 -9887973000",
            link: "tel:+91-9887973000"
        },
        {
            icon: <MapPin size={24} />,
            title: "Working Office",
            info: "1st Floor,  SB-10, Narayan Sagar, Narayan Vihar, Gopalpura Bypass, Ajmer, Road, Jaipur, Rajasthan 302020",
            link: "https://maps.app.goo.gl/2bZWAUnjr52NWi9W6?g_st=iwb"
        }
    ];

    return (
        <div className="contact">
            <section className="contact-main section">
                <div className="container">
                    <div className="contact-content">
                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h2>Request Quote</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company name (optional)"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Project Details</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Please describe your project requirements, timeline, and any specific details..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="spinner"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Get Quote
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="success-message">
                                        ✓ Quote request sent successfully! We'll get back to you within 24 hours.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <div className="contact-details">
                                {contactInfo.map((item, index) => (
                                    <a key={index} href={item.link} className="contact-item">
                                        <div className="contact-icon">
                                            {item.icon}
                                        </div>
                                        <div className="contact-text">
                                            <h4>{item.title}</h4>
                                            <p>{item.info}</p>
                                        </div>
                                    </a>
                                ))}
                                <div className="contact-item-static">
                                    <div className="contact-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="contact-text">
                                        <h4>Registered Office</h4>
                                        <p>201, Shree Ram Residency, P.No. 3-4, Sankhla Colony, Tonk Road, Jaipur (Raj.)
Pincode- 302015</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
