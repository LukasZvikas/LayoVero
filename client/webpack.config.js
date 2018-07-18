const path = require("path");


const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "/build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    hot: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
        query: {
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/blogPosts": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
      ,
      "/user": {
        target: "http://localhost:5000",
        changeOrigin: true
      }


    }
  }
};

module.exports = config;
