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


## 问题记录
- 修改了eslint等配置文件必须重启之后才能生效
- router的渲染逻辑routerRouter单独抽离一个包，后期自己维护
- 将React.renderDom这个渲染想隐藏起来。怎么实现？使用者只要配置routes之后就可以进入开发流程