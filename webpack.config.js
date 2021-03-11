const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ]
            }
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useCash: true,
            },
          },
        ],
      },
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   loader: 'source-map-loader'
      // },
      {
        test: /\.scss$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
          'css-loader',
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
    ,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new DuplicatePackageCheckerPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new UglifyJsPlugin()
    ],
  },
  // devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'jsx'],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
}
