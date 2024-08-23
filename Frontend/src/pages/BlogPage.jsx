import { useBlocker } from "react-router-dom";
import { useCreateAndUpdateAboutMutation, useGetAboutQuery, useGetBlogQuery } from "../../redux/serivce/productlslice";
import Blog from "../component/Blog";
import Footer from "../component/Footer";
import TopBanner from "../component/TopBanner";
import Topbar from "../component/Topbar";
import React from "react";

        
const BlogPage = (props) => {

    const [page,setPage]= React.useState(1)
    const [limit , setLimit] = React.useState(10)

    const { data : aboutData} = useGetAboutQuery()
    const {data} = useGetBlogQuery()
    // console.log(data)
    const [createAndUpdate , result] = useCreateAndUpdateAboutMutation()
    
    return (
        <div >
             <Topbar />
             <TopBanner title={props?.title}/>
             <Blog blogData={data?.data}  />
             <Footer data={aboutData} />
             
        </div>
    );
};
export default BlogPage;