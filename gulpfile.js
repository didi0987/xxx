var gulp = require("gulp");
var concat = require("gulp-concat");
var uglyfly = require("gulp-uglyfly");
var uglify = require("gulp-uglify");
var obfuscate = require("gulp-obfuscate");
var lzmajs = require("gulp-lzmajs");
var md5 = require("gulp-md5");
var through = require("through2");
var amdOptimize = require("amd-optimize");
var yargs = require("yargs");
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var webpackDevServer = require( 'webpack-dev-server' );
var HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require('glob');
var babel= require('babel-plugin-transform-strict-mode');

var env = yargs.argv;
var srcDirPre = "./src/";

//webpack方式
var nodeModulesRoot = path.resolve(__dirname, './node_modules')
var configRoot = path.resolve(__dirname, './config')+"/"
var libRoot = path.resolve(__dirname, './lib')+"/"
var commonConfig = {
	entry:{},
	// entry: {
	// 	app: [srcDirPre+"index.js"]   //入口js
	// },

	resolve: {
	    root: [srcDirPre],
	    alias: {
	      'nodeModules':nodeModulesRoot,
	      'config':configRoot,
	      'lib':libRoot
	    },
	    extensions: ['', '.js', '.jsx' ,'.css', '.scss', '.ejs', '.png', '.jpg', '.vue']
	}
};

// 获取指定路径下的入口文件
function getEntries(globPath) {
     var files = glob.sync(globPath),
       entries = {};

     files.forEach(function(filepath) {
         // 取倒数第二层(view下面的文件夹)做包名
         var split = filepath.split('/');
         var name = split[split.length - 2];

         entries[name] = './' + filepath;
     });

     return entries;
}

//调试
gulp.task('debug', [] ,function(callback) {
	var port = 9090;

    var config = require('./webpack.config.dev.js');

	var buildConfig = {
		output:{
			path: '/',
			filename: "[name].js"
		}
	}
    config = Object.assign(config, buildConfig,commonConfig);
    var entries = getEntries('src/**/index.js');
	Object.keys(entries).forEach(function(name) {
	    // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
	    config.entry[name] = [entries[name]];
	    
	    // 每个页面生成一个html
	    var plugin = new HtmlWebpackPlugin({
	        // 生成出来的html文件名
	        filename: name+'.html',
	        title:name,
	        // 每个html的模版，这里多个页面使用同一个模版
	        template: './src/template_debug.html',
	        // 自动将引用插入html
	        inject: true,
	        // 每个html引用的js模块，一定要有,不然就会多页面JS都放放在一起加载,也可以在这里加上vendor等公用模块
	        chunks: [name]
	    });
	    config.plugins.push(plugin);

  		config.entry[name].unshift('webpack-dev-server/client?http://0.0.0.0:'+port+"")
	})

    var compiler = webpack(config);
    // console.log(config)
    var webpackServer = new webpackDevServer(compiler, {
	    contentBase: './',
	    publicPath: "/debug",   //测试的目录文件名(其实是内存中的虚拟文件夹)
	    //filename: "bundle.js",   //总出口js
	    filename: "[name].js",
	    lazy: false,
	    hot: true,
	});

    webpackServer.listen(port,null,function(){
		require('dns').lookup(require('os').hostname(), function (err, add, fam) {
		  setTimeout(function(){
		  	console.log('develop server start at:'+add+":"+port);
		  },5000)
		})
    });
});

//发布
gulp.task('build', [] ,function(callback) {
	var tap = require('gulp-tap')
	var webpackStream = require('webpack-stream')
	var needHashFiles=[];
	var finishTag=false;
	var buildPath = './dest/';
	var buildConfig = {
	  output: {
		path: path.resolve(buildPath, "./"),
		publicPath: "",  //实际会生成的资源的前缀
		filename: "js_[name]_[chunkhash:16].js"   //总出口js
	  },
	  externals: {
	  	 'vue':'Vue'
	  },
	}
	var config = require('./webpack.config.build.js')
	config = Object.assign(config,buildConfig,commonConfig);//合并配置
	var entries = getEntries('src/**/index.js');
	Object.keys(entries).forEach(function(name) {
	    // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
	    config.entry[name] = [entries[name]];
	    
	    // 每个页面生成一个html
	    var plugin = new HtmlWebpackPlugin({
	        // 生成出来的html文件名
	        filename: name+'.html',
	        title:name,
	        // 每个html的模版，这里多个页面使用同一个模版
	        template: './src/template_build.html',
	        // 自动将引用插入html
	        inject: 'body',
	        // 每个html引用的js模块，一定要有,不然就会多页面JS都放放在一起加载,也可以在这里加上vendor等公用模块
	        chunks: [name]
	    });
	    config.plugins.push(plugin);
	})

	return gulp.src(srcDirPre+'index.js')
		  .pipe(webpackStream(config))

		  .pipe(gulp.dest(buildPath));
});
