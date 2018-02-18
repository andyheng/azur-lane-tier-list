const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("style.css");
  return {
    entry: "./src/app.js",
    output: {
      // path: path.join(__dirname, "public"),
      path: "/",
      filename: "bundle.js"
    },
    module: {
      rules: [{
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png|gif)(\?.*$|$)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: "css-loader", 
              options: {sourceMap: true}
            },
            {
              loader: "sass-loader",
              options: {sourceMap: true}
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      port: 8080,
      historyApiFallback: true
    }
  }
}

//we're compiling to bundle.js anyways, so we not longer need the script/app.js file we wer eusing with babel