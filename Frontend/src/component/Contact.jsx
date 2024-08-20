import React from 'react';

function Contact() {
    return (

        <div >
            <div className="container mt-5 mb-5">
                <div className="row">
                <h2>Contact Us</h2>
                    <div className="col-md-6 lg-6 sm-12">
                        {/* Map Section */}
                        <div >                         
                            <div className='mt-4' style={{ border: "1px solid #ccc", borderRadius: "3px", overflow: "hidden" }}>
                                <iframe
                                    title="Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.660866350706!2d-122.08424948468976!3d37.42199977982506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c6f4e97a1%3A0x62cf79d25d1b949b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1635704718190!5m2!1sen!2sus"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 lg-6 sm-12 m-auto'>
                       

                        {/* Contact Form */}
                        <form style={{ marginBottom: "20px" }}>
                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                                />
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                                />
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="subject">Subject:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                                />
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                                ></textarea>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Send"
                                    style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px", border: "none", borderRadius: "3px", cursor: "pointer" }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
