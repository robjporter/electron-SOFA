const path =require('path');  

module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: "node-loader",
  },
  {
    test: /\.(m?js|node)$/,
    exclude: /(.webpack|node_modules)/,
    parser: { amd: false },
    use: {
      loader: "@marshallofsound/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.(j|t)sx?$/,
    exclude: /node_modules/,
    loaders: [
      {
        loader: "babel-loader",
      },
    ],
  },
  {
    test: /\.(scss|css)$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.(jpg|png|gif|svg|ico|icns)$/,
    exclude: path.resolve(__dirname, './src/assets/fonts'),
    loader: "file-loader",
    options: {
      name: "[path][name].[ext]",
      outputPath: 'images/'
    },
  },
  {
    test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader",
  },
  {
    test: /\.svgico/,
    loader: 'raw'
  },
];
