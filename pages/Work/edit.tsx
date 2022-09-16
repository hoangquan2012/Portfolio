import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import {
    LeftOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import styles from './work.module.css'
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};



const Edit = () => {
    const route = useRouter()
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        fetch("/api/work", { method: "post", body: JSON.stringify(values) }).then((res) => res.json().then(data => console.log("create", data)))
    };

    const onReset = () => {
        form.resetFields();
    };


    return (
        <Form {...layout} form={form} className={styles.controlHook} onFinish={onFinish}>
            <Form.Item
                name="project"
                label="Add project"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input className={styles.input} />
            </Form.Item>
            <Form.Item
                name="type"
                label="Type"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select a project"
                    allowClear
                >
                    <Option value="root">MY PLAN</Option>
                    <Option value="container1">IN PROGRESS</Option>
                    <Option value="container2">DONE</Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
                {({ getFieldValue }) =>
                    getFieldValue('gender') === 'other' ? (
                        <Form.Item
                            name="customizeGender"
                            label="Customize Gender"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" style={{ marginRight: '10px', backgroundColor: '#bd5d38' }}>
                    Add
                </Button>
                <Button htmlType="button" onClick={onReset} style={{ marginRight: '10px' }}>
                    Reset
                </Button>
                <Button type="link" htmlType="button" style={{ color: '#bd5d38' }} onClick={(() => { route.push("/Work") })}>
                    <LeftOutlined />
                    Back
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Edit;