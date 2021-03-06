const path = require("path"); // 获取绝对路径用
const webpack = require("webpack"); // webpack核心
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 动态生成html插件

module.exports = {
    mode: "development",
    entry: [
        "webpack-hot-middleware/client?reload=true&path=/__webpack_hmr", // webpack热更新插件，就这么写
        "../src/index.js" // 项目入口
    ],
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].js"
    },
    devtool: "inline-source-map", // 报错的时候在控制台输出哪一行报错
    context: __dirname, // entry 和 module.rules.loader 选项相对于此目录开始解析
    module: {
        rules: [
            // {
            //     // 编译前通过eslint检查代码 (注释掉即可取消eslint检测)
            //     test: /\.js?$/,
            //     enforce: "pre",
            //     use: ["eslint-loader"],
            //     include: path.resolve(__dirname, "src")
            // },
            {
                // .js .jsx用babel解析
                test: /\.js?$/,
                use: ["babel-loader"],
                include: path.resolve(__dirname, "src")
            },
            {
                // .css 解析
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local]_[hash:base64:5]"
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                // .less 解析 (用于解析antd的LESS文件)
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    `less-loader`
                ],
                include: path.resolve(__dirname, "node_modules")
            },
            {
                // .less 解析
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local]_[hash:base64:5]"
                        }
                    },
                    "postcss-loader",
                    "less-loader"
                ],
                include: path.resolve(__dirname, "src")
            },
            {
                // .scss 解析
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local]_[hash:base64:5]"
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                // 文件解析
                test: /\.(eot|woff|otf|svg|ttf|woff2|appcache|mp3|mp4|pdf)(\?|$)/,
                include: path.resolve(__dirname, "src"),
                use: [
                    "file-loader?name=assets/[name].[ext]"
                ]
            },
            {
                // 图片解析
                test: /\.(png|jpg|gif)(\?|$)/,
                include: path.resolve(__dirname, "src"),
                use: [
                    "url-loader?limit=8192&name=assets/[name].[ext]"
                ]
            },
            {
                // CSV/TSV文件解析
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                // xml文件解析
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //根据模板插入css/js等生成最终HTML
            filename: "index.html", //生成的html存放路径，相对于 output.path
            // favicon: "./public/favicon.ico", // 自动把根目录下的favicon.ico图片加入html
            // template: "./public/index.html", //html模板路径
            inject: true // 是否将js放在body的末尾
        }),
        new webpack.HotModuleReplacementPlugin() // 热更新插件
    ],
    resolve: {
        extensions: [".js", ".jsx", ".less", ".css", ".scss"] //后缀名自动补全
    }
};