const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: false,
  output: {
    filename: 'bundle-[contenthash].js',
  },
  devServer: {
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]-[contenthash].[ext]'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
