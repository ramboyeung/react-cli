const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"), // 打包后的所有的文件存放的位置（出口）
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
	mainFiles: ["index"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,    //匹配css、scss文件
        use: [ // 注意webpack对css样式文件的解析和转换，执行顺序是从数组末项往前
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']  //给css兼容样式加前缀
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/i,    //匹配css、scss文件
        use: [ // 注意webpack对css样式文件的解析和转换，执行顺序是从数组末项往前
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']  //给css兼容样式加前缀
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 根据模板插入css/js等生成最终HTML
      filename: "index.html", //生成的html存放路径，相对于 output.path
      favicon: path.resolve(__dirname, '../public/favicon.ico'), // 自动把根目录下的favicon.ico图片加入html
      template: path.resolve(__dirname, '../public/index.html'), // html模板路径
      inject: true, // 是否将js放在body的末尾
    }),
    // 拷贝public中的文件到最终打包文件夹里
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "../public",
          to: "../dist",
          globOptions: {
            ignore: [
              "**/favicon.ico",
              "**/index.html"
            ],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new WebpackBar()
  ],
  devServer: {
    hot: true,
    port: "8090"
  }
};
