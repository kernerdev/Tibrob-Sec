const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const webpack = require('webpack');

const paths = [
  {
    path: '/',
    lastmod: new Date().toISOString().split('T').shift(),
  },
];

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
		clean:true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
	module: {
		rules: [
			{
        test: /\.css$/i,
        include: path.resolve(__dirname, ''),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
			{
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      }
		]
	},
	devServer: {
    static: 'dist',
    port: 8000,
    allowedHosts: 'all',
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
			publicPath: './',
			minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      base: "https://kernerdev.github.io/Tibrob-Sec/"
    }),
		new MiniCssExtractPlugin({ filename: 'style.css' }),
		new CopyPlugin({
      patterns: [
        { from: './src/robots.txt', to: './' },
        { from: './src/assets', to: './assets/' },
      ],
    }),
    new SitemapPlugin({ base: `https://kernerdev.github.io/Tibrob-Sec/`, paths }),
		new CssMinimizerPlugin(),
    new webpack.ProgressPlugin(),
  ]
};