const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.jsx",
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9090
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'index.[contenthash].js',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
    },
    extensions: ['.js', '.jsx', '.json', '.wasm']
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader",
          options: { modules: true }
        }],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
      },
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({ fix: true, extensions: ['js', 'jsx', 'css', 'sass']})
  ]
};