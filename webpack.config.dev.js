var path = require('path')
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
  // entry: {
  //   app: [__dirname+"/src/index.js"]   //入口js
  // },
  // output: {
  //   path: "/"//path.resolve(__dirname, ""),
  //   //publicPath: "debug",  //相对path中debug的相对目录,发布有用,no use for debug api
  //   //filename: "bundle.js"   //总出口js
  // },

  module:{
    loaders: [
        {
          test: /muse-ui.src.*?js$/,
          loader: 'babel'
        },
        {
          test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.js$/,
          loader: 'babel?presets=es2015',   //npm install -d --save-dev babel-preset-es2015
          exclude: /node_modules/
        },
        {
          test:/\.css$/,
          loader:"style-loader!css-loader"
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test:/.(png)|(jpg)|(gif)|(svg)$/,
          loader: 'url-loader?limit=10000&name=img/[name].[ext]'   //10k以下图片变成base64
        },
         { test: /\.(eot|woff|ttf)$/,
           loader: "file-loader" }
    ],
    noParse:[]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      // 'process.env':{
      //   'NODE_ENV':JSON.stringify('production')
      // }
    }),
    // new uglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new CopyWebpackPlugin([
    //   { from: './src/index.html', to: 'debug/index.html' }
    // ]),
  ]
}

// var deps = [
//   'bower_components/reactx/react.js',
//   'bower_components/reactx/react-dom.js'
// ];

// deps.forEach(function (dep) {
//   var depPath = path.resolve(__dirname,dep);
//   // config.resolve.alias[dep.split(path.sep)[0]] = depPath;
//   config.module.noParse.push(depPath);
// });
console.log("----------have fun----------")
module.exports = config;
