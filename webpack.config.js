const path = require('path');
module.exports = {
  context: path.join(__dirname, './leadsmanager/frontend/src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  entry: './index.js', // your entry file that you want it to be bundled for production
  output: {
    // the output file path,
    path: path.resolve(__dirname, './leadsmanager/frontend/static/frontend'), // build is your folder name.
    filename: 'main.js', // your specific filename to be built in the build folder.
  },

  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules')],
  },
};
