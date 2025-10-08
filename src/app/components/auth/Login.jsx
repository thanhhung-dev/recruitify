'use client';
import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Divider, Space } from 'antd';
import { ArrowRightOutlined, FacebookFilled, GoogleOutlined, LeftOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

function Login() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
        // Xử lý đăng nhập ở đây
    };

    const statsData = [
        { number: '175,324', label: 'Live Job' },
        { number: '97,354', label: 'Companies' },
        { number: '7,532', label: 'News Jobs' }
    ];

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            background: '#ffffff',
            margin: '0 auto',
            position: 'relative',
        }}>
            <Row style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
                {/* Đường chéo divider */}
                <div
                    style={{
                        position: 'absolute',
                        top: -100,
                        bottom: -100,
                        left: '48%',
                        width: '120px',
                        transform: 'translateX(-50%) rotate(5deg)',
                        background: 'linear-gradient(to right, transparent 0%, #fff 50%, #fff 100%)',
                        zIndex: 2
                    }}
                />

                {/* --- Cột bên trái: Form --- */}
                <Col
                    span={12}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '24px',
                        background: '#FFF',
                        position: 'relative',
                        height: '100vh'
                    }}
                >
                    {/* Back button */}
                    <Button
                        type="text"
                        icon={<LeftOutlined />}
                        style={{
                            padding: 0,
                            marginBottom: '20px',
                            color: '#666',
                            alignSelf: 'flex-start',
                            height: 'auto'
                        }}
                    >
                        Back to home
                    </Button>

                    {/* Phần form căn giữa */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginTop: '10px'
                    }}>
                        <div style={{ width: '100%', maxWidth: 380 }}>
                            {/* Logo */}
                            <div style={{ marginBottom: 16 }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" fill="none">
                                        <path d="M12.042 10V23H0.5V10H12.042Z" fill="black" stroke="black" />
                                        <path d="M29.7648 16.2664L29.5861 16.1169L21.2247 9.11694L21.0851 8.99976H13.0421V0.666748H24.8829L39.2169 14.3796V22.9998H29.7648V16.2664Z" fill="black" stroke="black" />
                                    </svg>
                                    <span style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        color: '#000',
                                        letterSpacing: '-0.5px'
                                    }}>
                                        RecruitJob
                                    </span>
                                </div>
                            </div>

                            {/* Header */}
                            <Title level={2} style={{ marginBottom: 8, fontWeight: 600 }}>
                                Sign in
                            </Title>
                            <Text type="secondary" style={{ fontSize: '14px' }}>
                                Don't have account{' '}
                                <a href="#" style={{ fontWeight: 500, color: '#000' }}>Create Account</a>
                            </Text>

                            {/* Form */}
                            <Form
                                form={form}
                                layout="vertical"
                                style={{ marginTop: 24 }}
                                onFinish={onFinish}
                                requiredMark={false}
                            >
                                {/* Email Address */}
                                <Form.Item
                                    name="email"
                                    rules={[
                                        { required: true, message: 'Please input your email!' },
                                        { type: 'email', message: 'Please enter a valid email!' }
                                    ]}
                                >
                                    <Input
                                        placeholder="Email address"
                                        size="large"
                                        style={{ borderRadius: '6px', height: 40 }}
                                    />
                                </Form.Item>

                                {/* Password */}
                                <Form.Item
                                    name="password"
                                    rules={[
                                        { required: true, message: 'Please input your password!' }
                                    ]}
                                >
                                    <Input.Password
                                        placeholder="Password"
                                        size="large"
                                        style={{ borderRadius: '6px', height: 40 }}
                                    />
                                </Form.Item>

                                {/* Remember Me & Forgot Password */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 24
                                }}>
                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        style={{ margin: 0 }}
                                    >
                                        <Checkbox style={{ fontSize: '14px' }}>
                                            Remember Me
                                        </Checkbox>
                                    </Form.Item>
                                    <a href="#" style={{ fontSize: '14px', fontWeight: 500 }}>
                                        Forgot password
                                    </a>
                                </div>

                                {/* Sign In Button */}
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        block
                                        size="large"
                                        style={{
                                            background: '#000',
                                            borderColor: '#000',
                                            marginBottom: 16,
                                            height: 44,
                                            fontSize: 16,
                                            fontWeight: 500,
                                            borderRadius: '6px'
                                        }}
                                        icon={<ArrowRightOutlined />}
                                    >
                                        Sign in
                                    </Button>
                                </Form.Item>

                                <Divider style={{ color: '#d9d9d9', fontSize: '14px' }}>or</Divider>

                                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                                    <Button
                                        icon={<FacebookFilled style={{ color: '#1877F2' }} />}
                                        block
                                        size="large"
                                        style={{
                                            height: 44,
                                            fontSize: 16,
                                            borderRadius: '6px'
                                        }}
                                    >
                                        Sign in with Facebook
                                    </Button>
                                    <Button
                                        icon={<GoogleOutlined style={{ color: '#DB4437' }} />}
                                        block
                                        size="large"
                                        style={{
                                            height: 44,
                                            fontSize: 16,
                                            borderRadius: '6px'
                                        }}
                                    >
                                        Sign in with Google
                                    </Button>
                                </Space>
                            </Form>
                        </div>
                    </div>
                </Col>

                {/* --- Cột bên phải: Background Image + text --- */}
                <Col
                    span={12}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        padding: '24px',
                        textAlign: 'center',
                        position: 'relative',
                        height: '100vh',
                        overflow: 'hidden'
                    }}
                >
                    {/* Background Image */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: "url('/assets/bg.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 0
                    }}></div>
                    {/* Overlay để text dễ đọc hơn */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.3)',
                        zIndex: 1
                    }}></div>

                    <div style={{ width: '100%', position: 'relative', zIndex: 2, paddingTop: '350px' }}>
                        {/* Title aligned to the left (near divider) and slightly smaller */}
                        <div style={{ paddingLeft: '48px', marginBottom: '48px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                            <div style={{ maxWidth: '420px' }}>
                                <Title level={1} style={{
                                    color: '#fff',
                                    fontSize: '34px',
                                    margin: 0,
                                    fontWeight: 600,
                                    lineHeight: 1.2,
                                    letterSpacing: '-0.02em',
                                    textAlign: 'left'
                                }}>
                                    Over 1,75,324 candidates<br />
                                    waiting for good employees.
                                </Title>
                            </div>
                        </div>

                        {/* Icons aligned to the same left edge as the title */}
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                            <div style={{ paddingLeft: '48px', maxWidth: '600px', width: '100%' }}>
                                <Row gutter={[40, 0]} style={{ maxWidth: '600px' }}>
                                    {statsData.map((stat, index) => (
                                        <Col key={index} span={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            {index === 0 ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ marginBottom: 12 }}>
                                                    <g clipPath="url(#clip0_136_1349)">
                                                        <path opacity="0.2" d="M16 18.9999C11.7872 19.0066 7.64764 17.8991 4.00098 15.7897V25.9999C4.00098 26.1313 4.02684 26.2613 4.0771 26.3826C4.12735 26.504 4.20101 26.6142 4.29387 26.7071C4.38673 26.7999 4.49697 26.8736 4.61829 26.9238C4.73962 26.9741 4.86965 26.9999 5.00098 26.9999H27.001C27.1323 26.9999 27.2623 26.9741 27.3837 26.9238C27.505 26.8736 27.6152 26.7999 27.7081 26.7071C27.8009 26.6142 27.8746 26.504 27.9249 26.3826C27.9751 26.2613 28.001 26.1313 28.001 25.9999V15.7886C24.3539 17.8987 20.2135 19.0066 16 18.9999Z" fill="white" />
                                                        <path d="M27.001 9H5.00098C4.44869 9 4.00098 9.44772 4.00098 10V26C4.00098 26.5523 4.44869 27 5.00098 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44772 27.5533 9 27.001 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M28.001 15.7886C24.3539 17.8986 20.2136 19.0066 16 18.9999C11.7872 19.0066 7.64755 17.899 4.00085 15.7896" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14.5 15H17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_136_1349">
                                                            <rect width="32" height="32" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            ) : (
                                                <img
                                                    src="/file.svg"
                                                    style={{
                                                        width: 20,
                                                        height: 20,
                                                        marginBottom: 12,
                                                        filter: 'brightness(0) invert(1)'
                                                    }}
                                                    alt=""
                                                />
                                            )}
                                            <Text style={{
                                                color: '#fff',
                                                fontSize: '20px',
                                                display: 'block',
                                                marginBottom: 6,
                                                fontWeight: 600,
                                                lineHeight: 1.2,
                                                textAlign: 'left'
                                            }}>
                                                {stat.number}
                                            </Text>
                                            <Text style={{
                                                color: '#fff',
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                opacity: 0.8,
                                                textAlign: 'left'
                                            }}>
                                                {stat.label}
                                            </Text>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Login;