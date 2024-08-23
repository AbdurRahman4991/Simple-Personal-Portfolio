import React, { useState } from 'react';
import { useCreateContactMutation } from '../../redux/serivce/productlslice';
import Swal from 'sweetalert2';

function Contact() {
    const [createContact, result] = useCreateContactMutation();

    // State for form inputs and errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate form inputs
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!formData.subject) newErrors.subject = 'Subject is required.';
        if (!formData.message) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await createContact(formData).unwrap();
                if (response) {
                    // Show success alert
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your message has been sent successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    // Clear form after successful submission
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                    setErrors({});
                }
            } catch (error) {
                // Show error alert
                Swal.fire({
                    title: 'Error!',
                    text: 'There was a problem sending your message. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } else {
            // Show validation error alert if form is invalid
            Swal.fire({
                title: 'Form Error!',
                text: 'Please fill in all required fields correctly.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <h2>Contact Us</h2>
                    <div className="col-md-6 lg-6 sm-12">
                        {/* Map Section */}
                        <div>
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
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                                />
                                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                                />
                                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="subject">Subject:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                                />
                                {errors.subject && <div style={{ color: 'red' }}>{errors.subject}</div>}
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                                ></textarea>
                                {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
                            </div>
                            <div>
                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px", border: "none", borderRadius: "3px", cursor: "pointer" }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
