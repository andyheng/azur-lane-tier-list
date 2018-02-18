const path = require("path");

// First, we need the entry and output points
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
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
    use: [
      "style-loader",
      "css-loader",
      "sass-loader"
    ]
  }]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 8080,
    historyApiFallback: true
  }
}

//we're compiling to bundle.js anyways, so we not longer need the script/app.js file we wer eusing with babel