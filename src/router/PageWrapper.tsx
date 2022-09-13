/*
 * @Author: wangzhenggui jianjia.wzg@raycloud.com
 * @Date: 2022-03-30 09:34:39
 * @LastEditors: wangzhenggui jianjia.wzg@raycloud.com
 * @LastEditTime: 2022-09-13 10:23:55
 * @FilePath: /react-template/src/router/PageWrapper.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wangzhenggui jianjia.wzg@raycloud.com, All Rights Reserved.
 */
import React, { useEffect } from 'react';

const PageWrapper: React.FC<{
  title: string;
}> = ({ children, title }) => {
  // 设置页面title
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
  // TODO: 后续面包屑等功能可以通过插件集成的方式接入
  return <>{children}</>;
};

export default PageWrapper;
