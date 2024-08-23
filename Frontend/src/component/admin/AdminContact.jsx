import React from 'react';
import { Space, Table, Tag } from 'antd';

const { Column } = Table;

function AdminContact({ contact }) {
    
 
console.log(contact?.data?.data)
    // Map the contact data to match the structure Ant Design expects
    const tableData = contact?.data?.data?.map((item) => ({
        key: item.id, // You need a unique key for each row, using `id` here
        name: item.name,
        email: item.email,
        subject: item.subject,
        message: item.message,
    }));

    return (
        <div>
            <Table dataSource={tableData}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Subject" dataIndex="subject" key="subject" />
                <Column title="Message" dataIndex="message" key="message" />
               
            </Table>
        </div>
    );
}

export default AdminContact;
