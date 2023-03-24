import { Form, Input, Button, message } from 'antd';
import { login, currentUser } from 'services/user';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/user/slice';

const FormLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const handleLogin = async () => {
    const formValue = await form.getFieldsValue();
    try {
      const msg = await login({
        autoLogin: true,
        type: 'account',
        ...formValue,
      });
      if (msg.status === 'ok') {
        message.success('登录成功');
        const user = await currentUser();
        dispatch(setUser(user.data));
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
    } catch (error) {
      message.error('登录失败，请重试！');
    }
  };
  return (
    <Form form={form}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input placeholder="请输入名称" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input placeholder="请输入密码" type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="w-full" onClick={handleLogin}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
