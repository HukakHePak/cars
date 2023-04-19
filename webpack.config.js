const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = (env) => ({
  entry: "./src/index.tsx",
  devtool: 'source-map',
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    historyApiFallback: true,
    port: 9090,
    proxy: {
      "/api": {
        target: "http://localhost:9090",
        withCredentials: true,
      },
    },
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
      models: path.resolve(__dirname, "src/models/"),
      pages: path.resolve(__dirname, "src/pages/"),
      scss: path.resolve(__dirname, "src/scss/"),
      stores: path.resolve(__dirname, "src/stores/"),
      utils: path.resolve(__dirname, "src/utils"),
    },
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".wasm",
      ".scss",
      ".css",
    ],
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
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["build"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process": {
        env: {
          mode: JSON.stringify(env.NODE_ENV),
          basename: JSON.stringify(env.basename),
          home: JSON.stringify(env.home),
          api: JSON.stringify(env.api),
          ws: JSON.stringify(env.ws),
        }
      }
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      fix: true,
      extensions: ["js", "jsx", "ts", "tsx", "css"],
    }),
  ],
});
