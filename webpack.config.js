const path = require("path");
const fs = require("fs");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const autoprefixer =require("autoprefixer");
function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./src/html/views");

const config = {
  entry: ["./src/js/main.js", "./src/css/main.css"],
  output: {
    filename: "./js/bundle.js"
  },
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true
      })
    ]
  },
  module: {
    rules: [{
        test: /\.(css|css)$/,
        include: path.resolve(__dirname, "src/css"),
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              import:true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require("autoprefixer")({
                  browsers:['ie >= 8', 'last 2 version']
                }),
                require("cssnano")({
                  preset: [
                    "default",
                    {
                      discardComments: {
                        removeAll: true
                      }
                    }
                  ]
                }),
                autoprefixer({
                  browsers:['ie >= 8', 'last 2 version']
              })
              ]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "src/html/includes"),
        use: ["raw-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.bundle.css",
       chunkFilename: "./css/media/media.css"
    }),
    new CopyWebpackPlugin([{
        from: "./src/fonts",
        to: "./fonts"
      },
      {
        from: "./src/favicon",
        to: "./favicon"
      },
      {
        from: "./src/img",
        to: "./img"
      },
      {
        from: "./src/uploads",
        to: "./uploads"
      }
    ])
  ].concat(htmlPlugins)
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.plugins.push(new CleanWebpackPlugin("dist"));
  }
  return config;
};