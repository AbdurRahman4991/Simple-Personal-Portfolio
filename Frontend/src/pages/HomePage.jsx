import About from "../component/About";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Resume from "../component/Resume";
import Topbar from "../component/Topbar";

const HomePage = () => {
    return (
        <div>
           <Topbar />
           <Hero />
           <About />
           <Resume />
           <Blog />
           <Contact />
           <Footer />
           
        </div>
    );
};
export default HomePage;