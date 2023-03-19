import { Form, Input, Button } from 'antd';

const FormLogin = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form}>
      <Form.Item name="name">
        <Input placeholder="请输入名称" />
      </Form.Item>
      <Form.Item name="密码">
        <Input placeholder="请输入密码" type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="w-full">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
