import About from "../component/About";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Resume from "../component/Resume";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";

        
const AboutPage = (props) => {
    return (
        <div >
             <Topbar />
             <TopBanner title={props?.title} />
             <About />
             <Resume />
             <Contact />
             <Footer />             
        </div>
    );
};
export default AboutPage;