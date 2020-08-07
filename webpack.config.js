const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.NODE_ENV,
    entry: './src/App.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        // Rules for images
        {
          test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
          oneOf: [
            // Inline lightweight images into CSS
            {
              issuer: /\.(css|less|styl|scss|sass|sss)$/,
              oneOf: [
                // Inline lightweight SVGs as UTF-8 encoded DataUrl string
                {
                  test: /\.svg$/,
                  loader: 'svg-url-loader',
                  options: {
                    name: '[hash:8].[ext]',
                    limit: 4096, // 4kb
                  },
                },

                // Inline lightweight images as Base64 encoded DataUrl string
                {
                  loader: 'url-loader',
                  options: {
                    name: '[hash:8].[ext]',
                    limit: 4096, // 4kb
                  },
                },
              ],
            },

            // Or return public URL to image resource
            {
              loader: 'file-loader',
              options: {
                name: '[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    devServer: {
      contentBase: './dist',
      port: 3200,
    },
  };
};
