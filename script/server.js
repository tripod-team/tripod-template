const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const config = require("../webpack/webpack.dev.js");

new WebpackDevServer(webpack(config)).listen(
  8080,
  "localhost",
  (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log("Listening at http://localhost:8080/");
  }
);
