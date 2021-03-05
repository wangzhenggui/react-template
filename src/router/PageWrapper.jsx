import React, { useEffect } from 'react';

const PageWrapper = ({ children, title }) => {
  // 设置页面title
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
  // TODO: 后续面包屑等功能可以通过插件集成的方式接入
  return <>{children}</>;
};

export default PageWrapper;
