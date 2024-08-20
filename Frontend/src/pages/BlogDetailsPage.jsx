
     import BlogDetails from "../component/BlogDetails";   
import Footer from "../component/Footer";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";
const BlogDetailsPage = (props) => {
    return (
        <div >
            <Topbar />
            <TopBanner title={props?.title}/>
             <BlogDetails />
             <Footer />
        </div>
    );
};
export default BlogDetailsPage;