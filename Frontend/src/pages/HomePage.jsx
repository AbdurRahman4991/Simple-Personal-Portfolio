import About from "../component/About";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Resume from "../component/Resume";
import Topbar from "../component/Topbar";
import {  useGetAboutQuery } from "../../redux/serivce/productlslice";
const HomePage = () => {
    const { data : aboutData} = useGetAboutQuery()
    // const [createAndUpdate , result] = useCreateAndUpdateAboutMutation
    return (
        <div>
           <Topbar />
           <Hero data={aboutData} />
           <About data={aboutData} />
           <Resume />
           <Blog />
           <Contact />
           <Footer data={aboutData} />
           
        </div>
    );
};
export default HomePage;