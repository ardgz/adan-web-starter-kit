const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    firstComp: './src/js/firstComp/index.js',
    vendor: ['react']
  },
  output: { 
    path: path.resolve(__dirname, 'public/js/components'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [ 'es2015', { modules: false} ] 
          ]
        }
      }
    ]
  },
  // plugins: [
  //   new webpack.SplitChunksPlugin({
  //     name: 'vendor',
  //     minChunks: function(module) {
  //       // this assumes your vendor imports exit in the node_modules directory
  //       return module.context &&
  //       module.context.indexOf('node_modules') !== -1;
  //     }
  //   })
  // ]
};