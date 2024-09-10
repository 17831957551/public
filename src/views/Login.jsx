import { useNavigate } from 'react-router-dom'
import { Form, Input, message, Button } from 'antd'
import { getUser } from '../api/user'
export function Login() {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage()
    async function handleSubmit(e) {
        let res = await getUser(e)
        if (res.length) {
            navigate('/Home')
            localStorage.setItem("userInfo", JSON.stringify(res[0]))
        } else {
            form.resetFields()
            messageApi.error('用户名或密码错误');
        }
    }
    return (
        <div>
            {contextHolder}
            <div style={{
                width: '400px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '10px',
                border: '1px solid #ccc',
                padding: '20px',
                background: '#fff',
                boxSize: 'border-box',
            }}>
                <Form
                    form={form}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="账号/手机号" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button style={{ width: '200px', marginLeft: "-25px" }} type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                }}>
                    <span style={{ fontSize: '12px' }}>验证码登录</span>
                    <span style={{ fontSize: '12px' }}>立即注册</span>
                </div>
                <div style={{
                    marginTop: '200px',
                    width: '400px',
                    flexWrap: 'wrap',
                    textAlign: 'center',
                    fontSize: '12px'
                }}>
                    <p style={{ color: '#ccc' }}>认证服务由中国移动提供</p>
                    <p style={{ color: '#ccc' }}>登录代表同意用户协议、隐私政策并授权使用您的账号信息(如昵称、头像、地址)以便您统一管理。</p>
                </div>
            </div>
        </div>
    )
}
