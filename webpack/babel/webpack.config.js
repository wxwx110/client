 var path=require('path')

 var htmlWebpackPlugin=require('html-webpack-plugin')

 module.exports={
     entry:path.join(__dirname,'./src/main.js'),

     output:{
         path:path.join(__dirname,'./dist'),
         filename:'bundle.js'
     },
     plugins:[ //所有webpack 插件配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
     ] ,
     module:{//所有第三方模块加载器
        rules:[
            //使用正则表达式匹配.CSS文件
            //配置处理CSS第三方规则y
            //调用规则，从右到左
            //webpack 1.X可以不带-lodader
            { test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.sass$/,use:['style-loader','css-loader','sass-loader']},
            //url-loader file-loader 安装这两个组件处理url的加载问题
            //默认情况会将图片文件转成BASE64编码
            //通过limit设定图片的大小（单位byte）,当图片大与limit设定值时不对图片进行base64否则怼图片进行编码
            //同时为了防止图片重名会重命名图片,可以通过第二个参数name=[name].[ext]让图片不被修改名称
            //但是为了防止存在同名文件的可能，不建议使用图片原名
            //或者使用[hash:8]-[name] 再名字前面放一个hash的前八位（HASH总共32位）值即可
            //搞版本的fileloader会导致limit失效最好用低版本的
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=23973&name=[hash:8]-[name].[ext]']},
            //处理字体文件
            { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},

            //配置babel转换高级语法
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
           
        ]
            
    }

 }