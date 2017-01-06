var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {},
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: [/src\/lib/, /node_modules/, /bower_components/], 
        loader: 'ng-annotate!babel'
      },
      { 
        test: /\.html$/, 
        loader: 'raw'
      },
      { 
        test: /\.(scss|sass)$/, 
        loader: 'style!css!sass'
      },
      { 
        test: /\.css$/, 
        loader: 'style!css' 
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
