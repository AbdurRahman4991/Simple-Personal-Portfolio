import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{background:"#4CAF50"}} className=" text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            We are committed to providing the best services to our customers. 
                            Stay connected with us.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/"  className="text-white">Home</Link></li> 
                            <li><Link to="/about"  className="text-white">About Us</Link></li>                          
                            <li><Link to="/contact" className="text-white">Contact</Link></li>
                            <li><Link to="/blog" className="text-white">Blog</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>
                            <i className="bi bi-geo-alt"></i> Dhaka, Bangladesh <br />
                            <i className="bi bi-telephone"></i> 01317659523 <br />
                            <i className="bi bi-envelope"></i> engrabdurrahman4991@gmail.com
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
