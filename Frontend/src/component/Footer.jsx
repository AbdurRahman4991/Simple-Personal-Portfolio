import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ data }) {
    // Define the maximum length for the description
    const maxDescriptionLength = 100;

    // Get the description and limit its length
    const description = data?.data?.description;
    const truncatedDescription = description?.length > maxDescriptionLength 
        ? description.substring(0, maxDescriptionLength) + '...'
        : description;

    return (
        <footer style={{ background: "#4CAF50" }} className="text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                           {truncatedDescription}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><Link to="/about" className="text-white">About Us</Link></li>
                            <li><Link to="/contact" className="text-white">Contact</Link></li>
                            <li><Link to="/blog" className="text-white">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>
                            <i className="bi bi-geo-alt"></i> {data?.data?.address}<br />
                            <i className="bi bi-telephone"></i> {data?.data?.phone}<br />
                            <i className="bi bi-envelope"></i> {data?.data?.email}
                        </p>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p className="mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
