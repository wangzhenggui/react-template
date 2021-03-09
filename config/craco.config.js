const { when } = require('@craco/craco');
const CracoAntDesignPlugin = require('craco-antd');
const WebpackBar = require('webpackbar');
const path = require('path');

module.exports = {
  style: {
    postcss: {
      env: {
        autoprefixer: {
          cascade: true,
        },
      },
    },
  },
  webpack: {
    plugins: [
      new WebpackBar({
        name: when(process.env.NODE_ENV === 'development', () => 'development'),
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            sourceMap: false,
          },
        },
        // 配置参考 https://webpack.js.org/loaders/css-loader/#modules
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]',
            // 回调必须返回 `local`，`global`，或者 `pure`
            mode: (resourcePath) => {
              if (/pure\.(less|css)$/i.test(resourcePath)) {
                return 'pure';
              }

              if (/(global)\.(less|css)$/i.test(resourcePath)) {
                return 'global';
              }

              if (/antd/i.test(resourcePath)) {
                return 'global';
              }

              return 'local';
            },
          },
        },
        babelPluginImportOptions: {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
        customizeThemeLessPath: path.join(__dirname, '../style/antd.customize.less'),
      },
    },
  ],
};
