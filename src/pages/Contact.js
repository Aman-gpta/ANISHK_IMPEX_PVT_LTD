import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Award, Truck } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
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
            setFormData({ name: '', email: '', company: '', projectType: '', message: '' });

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
            info: "+1 (555) 789-0123",
            link: "tel:+15557890123"
        },
        {
            icon: <MapPin size={24} />,
            title: "Location",
            info: "1234 Industrial Blvd, Steel City, TX",
            link: "#"
        }
    ];

    const businessInfo = [
        {
            icon: <Clock size={24} />,
            name: "Business Hours",
            info: "Mon-Fri: 7AM-6PM, Sat: 8AM-2PM"
        },
        {
            icon: <Award size={24} />,
            name: "Certifications",
            info: "ISO 9001:2015, AWS Certified"
        },
        {
            icon: <Truck size={24} />,
            name: "Delivery",
            info: "Free delivery within 50 miles"
        }
    ];

    return (
        <div className="contact">
            {/* Contact Hero */}
            <section className="contact-hero section section-dark">
                <div className="container">
                    <div className="contact-hero-content">
                        <h1>Get A Quote</h1>
                        <p className="contact-intro">
                            Ready to start your metal fabrication project? Contact us today for a free quote
                            and consultation. Our expert team is here to bring your vision to life!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="contact-main section section-gray">
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
                                    <div className="form-group">
                                        <label htmlFor="projectType">Project Type</label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select project type</option>
                                            <option value="structural">Structural Steel</option>
                                            <option value="fabrication">Custom Fabrication</option>
                                            <option value="welding">Welding Services</option>
                                            <option value="railings">Railings & Gates</option>
                                            <option value="other">Other</option>
                                        </select>
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
                            </div>

                            <div className="contact-social">
                                <h3>Business Information</h3>
                                <div className="business-info">
                                    {businessInfo.map((info, index) => (
                                        <div
                                            key={index}
                                            className="business-item"
                                        >
                                            <div className="business-icon">
                                                {info.icon}
                                            </div>
                                            <div className="business-text">
                                                <h4>{info.name}</h4>
                                                <p>{info.info}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="availability">
                                <h3>Project Availability</h3>
                                <div className="availability-status">
                                    <div className="status-indicator available"></div>
                                    <span>Accepting new projects</span>
                                </div>
                                <p>
                                    We're currently accepting new fabrication projects.
                                    Contact us today for a free consultation and quote!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq section section-dark">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>What's your typical response time?</h3>
                            <p>I usually respond to emails within 24 hours, often much sooner. For urgent matters, feel free to mention it in your message.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Do you work with international clients?</h3>
                            <p>Absolutely! I work with clients from all around the world and am comfortable with different time zones and communication preferences.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What's your project process like?</h3>
                            <p>I start with a discovery call to understand your needs, then provide a detailed proposal. Development includes regular updates and feedback sessions.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Do you provide ongoing support?</h3>
                            <p>Yes! I offer various support packages for ongoing maintenance, updates, and technical assistance after project completion.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
