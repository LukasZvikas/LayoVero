module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties"],
    "transform-object-rest-spread",
    "react-hot-loader/babel"
  ]
}
