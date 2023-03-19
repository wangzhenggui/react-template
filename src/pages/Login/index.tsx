import FormLogin from './components/FormLogin';
import styles from './index.less';

const Login = () => {
  return (
    <section className={`${styles.background} flex flex-col items-center justify-center`}>
      <h1 className=" text-3xl mb-4">管理系统</h1>
      <div className="max-w-lg w-full min-w-min p-6">
        <FormLogin />
      </div>
    </section>
  );
};

export default Login;
