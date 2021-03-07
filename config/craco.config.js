const { when } = require('@craco/craco');
const CracoAntDesignPlugin = require('craco-antd');
const WebpackBar = require('webpackbar');
const path = require('path');

module.exports = {
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
        customizeThemeLessPath: path.join(__dirname, '../style/antd.customize.less'),
      },
    },
  ],
};
