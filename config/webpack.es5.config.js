module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
          /*options: {
            presets: [
              ["@babel/preset-env", {
                useBuiltIns: 'usage',
                corejs: { version: "3.8", proposals: true }
              }]
            ],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },*/
        },
      },
    ],
  },
}