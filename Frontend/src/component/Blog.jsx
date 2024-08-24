import React from 'react';
import { Link } from 'react-router-dom';
import { blogImg } from '../../redux/api/baseApi';

function Blog({ blogData }) {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12 text-center mb-5">
                    <h4>BLOG</h4>
                </div>

                {/* Blog Posts */}
                {blogData?.data?.map((item, index) => {
                    // Format the date for each item
                    const formattedDate = new Date(item.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long', // Shows the full month name (e.g., August)
                        day: 'numeric'
                    });

                    return (
                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                            <Link to={`/blog/${item?.title}`} state={{ id: item?.id }} className="text-decoration-none">
                                <div className="card blog-card">
                                    <img src={blogImg + item?.image} className="card-img img-fluid" alt="Blog" />
                                    <div className="card-img-overlay blog-overlay">
                                        <h5 className="card-title">{item?.title}</h5>
                                        <p className="card-text">
                                            {item?.description} This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <p className="card-text">
                                            {formattedDate} 
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Blog;
