const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"

    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|svg$)/,
                use: [{
                    loader: 'url-loader',
                    options:{
                        limit: 50000,  // 把小于50000 byte的文件打包成Base64的格式写入JS
                        output: 'images/' // 当大于是使用file-loader将图片打包到images目录下
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: __dirname + "/src/index.html",
        })
    ]
};