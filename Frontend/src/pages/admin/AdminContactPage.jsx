import React from 'react';
import AdminContact from '../../component/admin/AdminContact';
import {  useGetContactQuery } from '../../../redux/serivce/productlslice';

function AdminContactPage() {
    
    const { data : contactData} = useGetContactQuery()
   
    return (
        <div>
            <AdminContact contact={contactData} />
        </div>
    );
}

export default AdminContactPage;