const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', '_layer0'), // should match server.path in layer0.config.js
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  entry: {
    server: './api/index.js' // this should point to your server entry point, which should export a function of type (request: Request, response: Response) => void or an express app as the default export.
  }
};
