import React, { useState } from 'react';
import { Space, Table, Modal, Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { blogImg } from '../../../redux/api/baseApi';

const { Column } = Table;

const AdminAbout = ({ abData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleFileChange = ({ fileList }) => {
    // Update fileList state when files are selected
    setFileList(fileList);
  };

  const handleBeforeUpload = (file) => {
    // You can validate or process files here before they are added to the file list
    return false; // Prevent automatic upload
  };

  const data = [
    {
      key: '1',
      name: abData?.data?.name,
      email: abData?.data?.email,
      phone: abData?.data?.phone,
      address: abData?.data?.address,
      description: abData?.data?.description,
      profile: 'Full stack',
      image: abData?.data?.image,
      skill: abData?.data?.skill,
    },
  ];

  const showModal = (record) => {
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Form Values:', values);
    setIsModalOpen(false);
  };

  return (
    <>
      <Table dataSource={data} rowKey="key">
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column title="Profile" dataIndex="profile" key="profile" />
        <Column
          title="Image"
          dataIndex="image"
          key="image"
          render={(image) => (
            <img src={blogImg + image} alt="Profile" style={{ width: 50, height: 50, objectFit: 'cover' }} />
          )}
        />
        <Column
          title="Skill"
          dataIndex="skill"
          key="skill"
          render={(skills) => (
            <span>
              {skills?.map((skill, index) => (
                <span key={index}>
                  {skill}
                  {index < skills.length - 1 && ', '}
                </span>
              ))}
            </span>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => showModal(record)}>
                Update
              </Button>
            </Space>
          )}
        />
      </Table>

      <Modal
        title="Update Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
      >
        <Form
          form={form}
          name="update-info"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please enter your address' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter a description' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Upload Image">
            <Upload
              multiple
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={handleBeforeUpload}
              listType="picture" // Optional: Display uploaded files as pictures
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.List name="skill">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    key={field.key}
                    label={`Skill ${index + 1}`}
                    required={false}
                    style={{ marginBottom: 0 }}
                  >
                    <Space align="baseline">
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[{ required: true, message: 'Please input the skill or delete this field' }]}
                        noStyle
                      >
                        <Input placeholder="Skill" style={{ width: '80%' }} />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <Button danger onClick={() => remove(field.name)}>
                          Remove
                        </Button>
                      ) : null}
                    </Space>
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block>
                    Add skill
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </Modal>
    </>
  );
};

export default AdminAbout;
