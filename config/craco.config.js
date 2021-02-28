const { when } = require("@craco/craco")
const WebpackBar = require('webpackbar')

module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({
        name: when(process.env.NODE_ENV === 'development', () => 'development')
      })
    ]
  }
}