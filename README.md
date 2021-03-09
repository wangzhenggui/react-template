### 项目启动
`npm start`
### Eslint配置
默认使用airbnb配置来保证代码质量

### prettier配置
使用prettier来保证项目中的代码风格一致，如需修改，需要团队内部沟通，最终修改.prettierrc即可，修改文件之后，可能不会立即生效，重启IDE

### stylelint配置
通过stylelint来对样式代码进行统一规范

### husky配置
参考package.json中的配置，此工程使用的版本是4.x;对于5.x版本的使用方式和现在不一样，使用时候需注意

### 接入anymock
[anymockPC接入指导手册](https://www.yuque.com/anymock/docs/chrome)


### 目录结构介绍
- `src` 项目源代码
- `src/common` 存放常用工具类相关代码
- `src/components` 可复用的组件代码
- `src/layout` 页面布局
- `src/pages` 页面级别代码，一般一个page对应一个Url
- `src/services` 服务代码，调用服务端接口
- `src/router` react-router-config 配置化路由渲染组件，后面迁出一个单独的包
- `config` 配置文件
- `config/craco.config.js` 自定义框架配置、框架基于cra脚手架，需要对原功能拓展可在这里配置


### 路由配置
在`src/routers.js` 中配置我们的页面路由，配置参考如下：
```
import { lazy } from 'react';
import DefaultLayout from './layout/DefaultLayout';

const routerPrefix = '/user/shop'; // 路由前缀
const routes = [
  {
    path: '/add',
    exact: true,
    component: lazy(() => import('./pages/AddShop')),
    title: '增加门店',
  },
  {
    path: '/sub',
    exact: true,
    component: lazy(() => import('./pages/SubShop')),
    title: '删除门店',
  },
  {
    path: '/detail',
    exact: true,
    component: lazy(() => import('./pages/ShopDetail')),
    title: '门店详情',
  },
  {
    path: '/*',
    exact: true,
    redirect: '/detail',
  },
];

export default [
  {
    path: routerPrefix,
    component: DefaultLayout,
    routes,
  },
];

export const router = 'browserRouter';
```
- routerPrefix 路由前缀；添加之后，该路由下的其他子路由不用在添加前缀
- router 路由方式：browserRouter/hashRouter 这俩种常见路由方式；还支持其他react-router5中支持的路由方式


## 状态管理工具
该框架默认使用了Recoil作为状态管理；
- 如果需要redux或者mobx作为管理工具，可以自行引入
- Recoil作为FB公司的新宠儿，hooks的编程理念，和react天生的搭配使用，学习的成本与redux的生态圈相比，要容易很多
- [中文文档](https://www.recoiljs.cn/)
- 更多功能，大家一起探讨

## 视觉库
使用Ant Design作为项目的视觉库，通过craco-antd插件扩展Antd的主题色、优化问题
[插件接入问答](https://github.com/DocSpring/craco-antd)

## 请求库
使用umi-request作为请求库。
umi-request 与 fetch, axios 异同
| 特性       | umi-request    | fetch          | axios          |
| :--------- | :------------- | :------------- | :------------- |
| 实现       | 浏览器原生支持 | 浏览器原生支持 | XMLHttpRequest |
| 大小       | 9k             | 4k (polyfill)  | 14k            |
| query 简化 | ✅             | ❌             | ✅             |
| post 简化  | ✅             | ❌             | ❌             |
| 超时       | ✅             | ❌             | ✅             |
| 缓存       | ✅             | ❌             | ❌             |
| 错误检查   | ✅             | ❌             | ❌             |
| 错误处理   | ✅             | ❌             | ✅             |
| 拦截器     | ✅             | ❌             | ✅             |
| 前缀       | ✅             | ❌             | ❌             |
| 后缀       | ✅             | ❌             | ❌             |
| 处理 gbk   | ✅             | ❌             | ❌             |
| 中间件     | ✅             | ❌             | ❌             |
| 取消请求   | ✅             | ❌             | ✅             |

## 问题记录
- Q: 修改了eslint等配置文件必须重启之后才能生效
  - A: 通过nodemon监听配置文件变化重新启动服务器
- router的渲染逻辑routerRouter单独抽离一个包，后期自己维护
- 将React.renderDom这个渲染想隐藏起来。怎么实现？使用者只要配置routes之后就可以进入开发流程
- Q: 在使用npm install安装依赖包之后，出现[issues](https://github.com/DocSpring/craco-less/issues/30);
  - A: 使用yarn install安装依赖包


##  待处理问题
- autoprefixer设置了未生效
- 开发环境打包、生产环境打包优化待完善