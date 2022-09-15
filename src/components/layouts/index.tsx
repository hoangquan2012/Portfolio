import {
    MenuFoldOutlined,
    FileImageOutlined,
    HeartOutlined,
    UserOutlined,
    EditFilled,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import styles from './layout.module.css';
import 'antd/dist/antd.css';
import Image from 'next/image'
import { useRouter } from 'next/router';
const { Header, Sider, Content } = Layout;

const Layouts = ({ children }: any) => {
    const [collapsed, setCollapsed] = useState(false);
    const route = useRouter()
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
                    onClick={((key) => {
                        console.log(key)
                        switch (key.key) {
                            case "1":
                                route.push("/About")
                                break;
                            case "2":
                                route.push("/Work")
                                break;
                            default:
                                route.push("/")
                                break;
                        }
                    })}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'About',
                        },
                        {
                            key: '2',
                            icon: <EditFilled />,
                            label: 'Work',
                        },
                        {
                            key: '3',
                            icon: <FileImageOutlined />,
                            label: 'Image',
                        },
                        {
                            key: '4',
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