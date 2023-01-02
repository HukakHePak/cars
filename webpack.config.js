const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    historyApiFallback: true,
    port: 9090,
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.[contenthash].js",
    publicPath: "auto",
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets/"),
      components: path.resolve(__dirname, "src/components/"),
      contexts: path.resolve(__dirname, "src/contexts/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      pages: path.resolve(__dirname, "src/pages/"),
      stores: path.resolve(__dirname, "src/stores/"),
      scss: path.resolve(__dirname, "src/scss/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".wasm", ".scss", ".css"],
  },
  module: {
    
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/, /\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["build"],
        },
      },
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({ fix: true, extensions: ["js", "jsx", "ts", "tsx", "css"] }),
  ],
};
