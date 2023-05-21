const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FileManagerPlugin = require("filemanager-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const webpack = require("webpack")

const extensions = [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"]

module.exports = (env, argv) => {
  const config = {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/build"),
      filename: "[contenthash].js",
      publicPath: "/"
    },
    resolve: {
      alias: ["assets", "components", "contexts", "hooks", "models", "pages", "scss", "stores", "utils"].reduce(
        (alias, item) => {
          alias[item] = path.resolve(__dirname, `src/${item}/`);
          return alias;
        }, {})
      ,
      extensions
    },
    module: {
      rules: [
        {
          test: [/\.ts$/, /\.tsx$/, /\.js$/, /\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: "ts-loader"
          }
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { modules: true }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource"
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/assets/img/logos/ico.png",
      }),
      new webpack.DefinePlugin({
        process: {
          env: {
            mode: JSON.stringify(argv.mode),
            api: JSON.stringify(env.api),
            ws: JSON.stringify(env.ws)
          }
        }
      }),
      new MiniCssExtractPlugin({
        filename: "[contenthash].css",
      }), 
    ]
  }

  if(argv.mode === "production") {
    config.optimization = {
      minimize: true,
      minimizer: [
        `...`,
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.squooshMinify,
          },
        }),
      ],
    }
    config.plugins.push(
      new FileManagerPlugin({
        events: {
          onStart: {
            delete: ["build"]
          }
        }
      }),
    )
  }

  if (argv.mode === "development") {
    config.devtool = "source-map"
    config.devServer = {
      watchFiles: path.join(__dirname, "src"),
      historyApiFallback: true,
      port: 9090,
      proxy: {
        "/api": {
          target: "http://localhost:9090",
          withCredentials: true
        }
      }
    }
    config.plugins.push(
      new ESLintPlugin({
        fix: true,
        emitWarning: false
      })
    )
  }

  return config
}
