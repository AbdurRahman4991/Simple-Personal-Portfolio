import { useCreateAndUpdateAboutMutation, useCreateContactMutation, useGetAboutQuery } from "../../redux/serivce/productlslice";
import About from "../component/About";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Resume from "../component/Resume";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";

        
const AboutPage = (props) => {

    const { data : aboutData} = useGetAboutQuery()
    // const [createAndUpdate , result] = useCreateContactMutation()
    // console.log(aboutData)


    // const handlerCreateConact = (data)=>{
    //             createAndUpdate(data).then(res=>{
                    
    //             })
    // }
  

    return (
        <div >
             <Topbar  />
             <TopBanner title={props?.title} />
             <About data={aboutData} />
             <Resume />
             <Contact />
             <Footer data={aboutData}/>             
        </div>
    );
};
export default AboutPage;