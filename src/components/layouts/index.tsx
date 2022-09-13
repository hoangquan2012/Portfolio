import {
    MenuFoldOutlined,
    FileImageOutlined,
    HeartOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import styles from './layout.module.css';
import 'antd/dist/antd.css';
import Image from 'next/image'
const { Header, Sider, Content } = Layout;

const Layouts = ({ children }: any) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout className={styles.layout}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#bd5d38' }}>
                <div className={styles.containerImg}>
                    <img
                        src="quan.png"
                        className={styles.image}
                    />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ backgroundColor: '#bd5d38' }}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'About',
                        },
                        {
                            key: '2',
                            icon: <FileImageOutlined />,
                            label: 'Image',
                        },
                        {
                            key: '3',
                            icon: <HeartOutlined />,
                            label: 'Interest',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Layouts;