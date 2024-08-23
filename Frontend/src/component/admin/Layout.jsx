import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    ReadOutlined,
    ContactsOutlined,
} from '@ant-design/icons';
import { theme } from 'antd'; // Adjust if you’re importing the theme from a custom location

const { Header, Sider, Content } = Layout;

const LayoutComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const menuItems = [
        {
            key: '1',
            label: 'A-R',
            path: '/dashboard',
        },
        {
            key: '2',
            icon: <UserOutlined />,
            label: 'About',
            path: '/admin/about-admin',
        },
        {
            key: '3',
            icon: <ContactsOutlined />,
            label: 'Contact',
            path: '/admin/admin-contact',
        },
        {
            key: '4',
            icon: <ReadOutlined />,
            label: 'Blog',
            path: '/admin/admin-blog',
        },
    ];

    const handleMenuClick = (item) => {
        navigate(item.key);
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuItems.map((item) => ({
                        key: item.path,
                        icon: item.icon,
                        label: item.label,
                    }))}
                    onClick={handleMenuClick} // Handle menu navigation
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutComponent;
