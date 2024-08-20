

import Blog1 from "../assets/Image/blog 1.jpeg";
const BlogDetails = () => {
    return (
        <div >
            <div className="blog-details">
                <h1 className="blog-title">The Future of Web Development</h1>
                <div className="blog-meta">
                    <span className="blog-author">By Jane Doe</span> |
                    <span className="blog-date"> August 20, 2024</span>
                </div>
                <div className="blog-content">
                    <img src={Blog1} alt="" />
                    <p>
                        Web development has rapidly evolved over the years, with new technologies and frameworks emerging at a breakneck pace.
                        In this article, we’ll explore some of the key trends that are shaping the future of web development.
                    </p>
                    <p>
                        The rise of AI and machine learning is transforming how websites are built, allowing for more personalized user experiences.
                        Additionally, the growing adoption of WebAssembly and other performance-enhancing technologies is making it easier to build
                        powerful web applications that rival native apps.
                    </p>
                    <p>
                        As these and other trends continue to develop, the future of web development looks more exciting than ever. Stay tuned
                        for more updates on what’s coming next!
                    </p>
                </div>
            </div>
        </div>
    );
};
export default BlogDetails;