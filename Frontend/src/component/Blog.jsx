import React from 'react';
import Blog1 from "../assets/Image/blog 1.jpeg";
import Blog2 from "../assets/Image/blog 2.jpg";
import Blog3 from "../assets/Image/blog 3.jpg";
import { Link } from 'react-router-dom';

function Blog({ blogData }) {
    
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12 text-center mb-5">
                    <h4>BLOG</h4>
                </div>

                {/* Blog Post 1 */}
                {blogData?.data?.map((item,index) => {



                    return     <div key={index} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    {console.log(item)}
                     <Link to={`/blog/${item?.title}`} state={{id : item?.id}} className="text-decoration-none">
                         <div className="card blog-card">
                             <img src={Blog1} className="card-img img-fluid" alt="Blog 1" />
                             <div className="card-img-overlay blog-overlay">
                                 <h5 className="card-title">{item?.title}</h5>
                                 <p className="card-text">{item.description}This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                 <p className="card-text">Last updated 3 mins ago</p>
                             </div>
                         </div>
                     </Link>
                 </div>
                })}
               
            </div>
        </div>
    );
}

export default Blog;
