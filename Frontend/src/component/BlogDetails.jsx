

import { useLocation, useParams } from "react-router-dom";
import Blog1 from "../assets/Image/blog 1.jpeg";
import { useGetSingleBlogQuery } from "../../redux/serivce/productlslice";
import { blogImg, imageUrl } from "../../redux/api/baseApi";
const BlogDetails = () => {
    const locaion = useLocation()
    // console.log(locaion);
    // const params = useParams()

    const { data: singleBlog } = useGetSingleBlogQuery(locaion?.state?.id);

    console?.log(singleBlog)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-details">
                            <h1 className="blog-title">{singleBlog?.data?.title}</h1>
                            <div className="blog-meta">
                                <span className="blog-author">{singleBlog?.data?.author}</span> |
                                <span className="blog-date">
                                    {singleBlog?.data?.created_at && new Date(singleBlog?.data?.created_at).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="blog-content">
                                <img src={blogImg + singleBlog?.data?.image} alt={singleBlog?.data?.title} style={{width:"100%"}} />
                                <p>{singleBlog?.data?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default BlogDetails;