import { useGetAboutQuery } from "../../../redux/serivce/productlslice";
import AdminAbout from "../../component/admin/AdminAbout";

        
const AdminAboutPage = () => {
    const { data : aboutData} = useGetAboutQuery()
    
    return (
        <div>
            <AdminAbout abData={aboutData} />
        </div>
    );
};
export default AdminAboutPage;