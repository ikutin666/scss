var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
mode: 'development',
entry: './js/jq.js',
output:{
	path: path.resolve(__dirname, 'dict'),
	filename: 'boundle.js'
},
module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};