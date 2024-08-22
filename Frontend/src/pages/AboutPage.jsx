import { useCreateAndUpdateAboutMutation, useGetAboutQuery } from "../../redux/serivce/productlslice";
import About from "../component/About";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Resume from "../component/Resume";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";

        
const AboutPage = (props) => {

    const { data : aboutData} = useGetAboutQuery()
    const [createAndUpdate , result] = useCreateAndUpdateAboutMutation()
    // console.log(aboutData?.data)

  

    return (
        <div >
             <Topbar  />
             <TopBanner title={props?.title} />
             <About aboutData={aboutData} />
             <Resume />
             <Contact />
             <Footer/>             
        </div>
    );
};
export default AboutPage;