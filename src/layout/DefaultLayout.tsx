import { Layout } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import SwitchTheme from 'components/SwitchTheme';
import { selectUserInfo } from 'store/user/slice';

const DefaultLayout = ({ children = [] }) => {
  const user = useSelector(selectUserInfo);
  const history = useHistory();
  if (isEmpty(user)) {
    history.push('/login');
    return null;
  }
  return (
    <>
      <Layout.Header className="bg-white dark:bg-gray-600">
        <SwitchTheme />
      </Layout.Header>
      {children}
    </>
  );
};

export default DefaultLayout;
