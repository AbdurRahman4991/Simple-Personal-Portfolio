import Blog from "../component/Blog";
import Footer from "../component/Footer";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";

        
const BlogPage = (props) => {
    return (
        <div >
             <Topbar />
             <TopBanner title={props?.title}/>
             <Blog />
             <Footer />
             
        </div>
    );
};
export default BlogPage;