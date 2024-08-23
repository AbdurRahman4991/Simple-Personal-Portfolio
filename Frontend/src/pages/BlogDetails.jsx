import { useCreateAndUpdateAboutMutation, useGetAboutQuery } from "../../redux/serivce/productlslice";
import BlogDetails from "../component/BlogDetails";
import Footer from "../component/Footer";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";

        
const BlogDetailsPage = () => {
    const { data : aboutData} = useGetAboutQuery()
    const [createAndUpdate , result] = useCreateAndUpdateAboutMutation()
    return (
        <div >
            <Topbar />
            <TopBanner />
            <BlogDetails />
            <Footer data={aboutData} />
        </div>
    );
};
export default BlogPage;