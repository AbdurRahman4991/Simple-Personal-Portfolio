
import { useParams } from "react-router-dom";
import { useCreateAndUpdateAboutMutation, useGetAboutQuery, useGetSingleBlogQuery } from "../../redux/serivce/productlslice";
import BlogDetails from "../component/BlogDetails";
import Footer from "../component/Footer";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";



const BlogDetailsPage = (props) => {
    const { data: aboutData } = useGetAboutQuery()
 
  
    return (

        <div >
            <Topbar />
            <TopBanner title={props?.title} />
            <BlogDetails  />
            <Footer data={aboutData} />
        </div>
    );
};
export default BlogDetailsPage;