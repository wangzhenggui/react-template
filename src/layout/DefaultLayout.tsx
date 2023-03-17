import React from 'react';
import { Layout } from 'antd';
import SwitchTheme from 'components/SwitchTheme';

const DefaultLayout = ({ children = [] }) => {
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
