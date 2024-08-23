import {  useGetAboutQuery } from "../../redux/serivce/productlslice";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";


const ContactPage = (props) => {
    const { data: aboutData } = useGetAboutQuery()

    return (
        <div >
            <Topbar />
            <TopBanner title={props?.title} />
            <Contact />
            <Footer data={aboutData} />
        </div>
    );
};
export default ContactPage;