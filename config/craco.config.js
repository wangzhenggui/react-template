const CracoAntDesignPlugin = require('craco-antd');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const path = require('path');

module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
          useBuiltIns: 'entry',
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true,
          },
          targets: {
            chrome: '60',
            firefox: '60',
            ie: '9',
            safari: '10',
            edge: '17',
          },
        },
      ],
    ],
  },
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
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'development') return webpackConfig;
      webpackConfig.entry = {
        main: path.resolve(__dirname, '../src/index.tsx'),
      };
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.join(__dirname, '../build'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        publicPath: '/orderPass/',
      };
      webpackConfig.resolve = {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
          common: path.resolve(__dirname, '../src/common/'),
          store: path.resolve(__dirname, '../app/store/'),
        },
      };
      return webpackConfig;
    },
    plugins: [
      new WebpackBar(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../public/index.html'),
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
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
      },
    },
  },
};
