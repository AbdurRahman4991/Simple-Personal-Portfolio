import Contact from "../component/Contact";
import Footer from "../component/Footer";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";

        
const ContactPage = (props) => {
    
    return (
        <div >
            <Topbar />
            <TopBanner title={props?.title} />
            <Contact />
            <Footer />
        </div>
    );
};
export default ContactPage;